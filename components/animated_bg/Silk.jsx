"use client";

/* eslint-disable react/no-unknown-property */

import React, {
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useLayoutEffect,
} from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";

import { useTheme } from "@/components/ThemeProvider";


/* =========================================================
   COLOR UTILITIES
========================================================= */

const hexToNormalizedRGB = (hex) => {
    const clean = hex.replace("#", "");

    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;

    return [r, g, b];
};


/* =========================================================
   VERTEX SHADER
========================================================= */

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {

    vPosition = position;
    vUv = uv;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
}
`;


/* =========================================================
   FRAGMENT SHADER
========================================================= */

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;


/* =========================================================
   NOISE
========================================================= */

float noise(vec2 texCoord) {

    float G = e;

    vec2 r =
        G * sin(
            G * texCoord
        );

    return fract(
        r.x *
        r.y *
        (1.0 + texCoord.x)
    );
}


/* =========================================================
   UV ROTATION
========================================================= */

vec2 rotateUvs(
    vec2 uv,
    float angle
) {

    float c = cos(angle);
    float s = sin(angle);

    mat2 rot =
        mat2(
            c,
            -s,
            s,
            c
        );

    return rot * uv;
}


/* =========================================================
   MAIN
========================================================= */

void main() {

    /* -------------------------------------------------------
       Noise
    ------------------------------------------------------- */

    float rnd =
        noise(gl_FragCoord.xy);


    /* -------------------------------------------------------
       UV
    ------------------------------------------------------- */

    vec2 uv =
        rotateUvs(
            vUv * uScale,
            uRotation
        );


    vec2 tex =
        uv * uScale;


    /* -------------------------------------------------------
       Animation
    ------------------------------------------------------- */

    float tOffset =
        uSpeed * uTime;


    tex.y +=
        0.03 *
        sin(
            8.0 *
            tex.x -
            tOffset
        );


    /* -------------------------------------------------------
       Main Silk Pattern
    ------------------------------------------------------- */

    float pattern =
        0.6 +
        0.4 *
        sin(
            5.0 *
            (
                tex.x +
                tex.y +

                cos(
                    3.0 *
                    tex.x +
                    5.0 *
                    tex.y
                ) +

                0.02 *
                tOffset
            ) +

            sin(
                20.0 *
                (
                    tex.x +
                    tex.y -
                    0.1 *
                    tOffset
                )
            )
        );


    /* -------------------------------------------------------
       Normalize Pattern
    ------------------------------------------------------- */

    float blend =
        pattern * 0.5 + 0.5;

    blend =
        clamp(
            blend,
            0.0,
            1.0
        );


    /* -------------------------------------------------------
       WHITE / GREY BASE
       with subtle RED / BROWN
    ------------------------------------------------------- */

    vec3 baseColor =
        mix(
            uColor,
            uColor2,
            blend
        );


    /* -------------------------------------------------------
       Subtle red / brown flowing variation
    ------------------------------------------------------- */

    float accentPattern =
        0.5 +
        0.5 *
        sin(
            tex.x * 3.5 +
            tex.y * 4.0 +
            tOffset * 0.35
        );


    accentPattern =
        smoothstep(
            0.55,
            0.9,
            accentPattern
        );


    baseColor =
        mix(
            baseColor,
            uColor3,
            accentPattern * 0.20
        );


    /* -------------------------------------------------------
       Add subtle texture
    ------------------------------------------------------- */

    baseColor -=
        rnd /
        15.0 *
        uNoiseIntensity;


    /* -------------------------------------------------------
       Final Color
    ------------------------------------------------------- */

    gl_FragColor =
        vec4(
            baseColor,
            1.0
        );
}
`;


/* =========================================================
   SILK PLANE
========================================================= */

const SilkPlane = forwardRef(
    function SilkPlane(
        {
            uniforms,
        },
        ref
    ) {

        const { viewport } =
            useThree();


        /* ---------------------------------------------------
           Resize Plane
        --------------------------------------------------- */

        useLayoutEffect(() => {

            const mesh =
                ref.current;

            if (!mesh) {
                return;
            }

            mesh.scale.set(
                viewport.width,
                viewport.height,
                1
            );

        }, [
            ref,
            viewport,
        ]);


        /* ---------------------------------------------------
           Animation
        --------------------------------------------------- */

        useFrame(
            (_state, delta) => {

                const mesh =
                    ref.current;

                if (!mesh) {
                    return;
                }

                const material =
                    mesh.material;

                material.uniforms.uTime.value +=
                    0.1 * delta;

            }
        );


        return (
            <mesh ref={ref}>

                <planeGeometry
                    args={[1, 1, 1, 1]}
                />

                <shaderMaterial
                    uniforms={uniforms}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />

            </mesh>
        );
    }
);


SilkPlane.displayName =
    "SilkPlane";


/* =========================================================
   SILK COMPONENT
========================================================= */

const Silk = ({
    speed = 5,
    scale = 1,
    color,
    noiseIntensity = 1.2,
    rotation = 0,
}) => {

    const meshRef =
        useRef(null);


    const {
        resolvedTheme,
    } = useTheme();


    /* =====================================================
       THEME COLORS

       DARK:
       Charcoal + Grey + Dark Brown/Red

       LIGHT:
       White + Cool Grey + Muted Red/Brown
    ====================================================== */

    const themeColors =
        resolvedTheme === "dark"
            ? {
                  primary: "#171514",
                  secondary: "#403C3A",
                  accent: "#3A211F",
              }
            : {
                  primary: "#F7F7F6",
                  secondary: "#C8C7C5",
                  accent: "#754541",
              };


    /* =====================================================
       CUSTOM COLOR SUPPORT

       If a color prop is supplied, use it as primary.
    ====================================================== */

    const primaryColor =
        color ?? themeColors.primary;


    /* =====================================================
       SHADER UNIFORMS
    ====================================================== */

    const uniforms =
        useMemo(
            () => ({

                uSpeed: {
                    value: speed,
                },

                uScale: {
                    value: scale,
                },

                uNoiseIntensity: {
                    value: noiseIntensity,
                },

                uColor: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            primaryColor
                        )
                    ),
                },

                uColor2: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            themeColors.secondary
                        )
                    ),
                },

                uColor3: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            themeColors.accent
                        )
                    ),
                },

                uRotation: {
                    value: rotation,
                },

                uTime: {
                    value: 0,
                },

            }),
            [
                speed,
                scale,
                noiseIntensity,
                primaryColor,
                themeColors.secondary,
                themeColors.accent,
                rotation,
            ]
        );


    /* =====================================================
       UPDATE COLORS WHEN THEME CHANGES
    ====================================================== */

    useEffect(() => {

        const mesh =
            meshRef.current;

        if (!mesh) {
            return;
        }

        const material =
            mesh.material;


        const colors =
            resolvedTheme === "dark"
                ? {
                      primary: "#171514",
                      secondary: "#403C3A",
                      accent: "#3A211F",
                  }
                : {
                      primary: "#F7F7F6",
                      secondary: "#C8C7C5",
                      accent: "#754541",
                  };


        /* -------------------------------------------------
           Primary
        ------------------------------------------------- */

        material.uniforms.uColor.value.set(
            color ?? colors.primary
        );


        /* -------------------------------------------------
           Secondary Grey
        ------------------------------------------------- */

        material.uniforms.uColor2.value.set(
            colors.secondary
        );


        /* -------------------------------------------------
           Muted Red / Brown
        ------------------------------------------------- */

        material.uniforms.uColor3.value.set(
            colors.accent
        );

    }, [
        resolvedTheme,
        color,
    ]);


    /* =====================================================
       CANVAS
    ====================================================== */

    return (

        <Canvas
            dpr={[1, 2]}
            frameloop="always"
            gl={{
                antialias: true,
                alpha: false,
            }}
        >

            <SilkPlane
                ref={meshRef}
                uniforms={uniforms}
            />

        </Canvas>

    );
};


export default Silk;