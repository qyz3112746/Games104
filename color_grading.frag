#version 310 es

#extension GL_GOOGLE_include_directive : enable

#include "constants.h"

#define ColorGridingIntensity 1.0

layout(input_attachment_index = 0, set = 0, binding = 0) uniform highp subpassInput in_color;

layout(set = 0, binding = 1) uniform sampler2D color_grading_lut_texture_sampler;

layout(location = 0) out highp vec4 out_color;

void main()
{
    highp ivec2 lut_tex_size = textureSize(color_grading_lut_texture_sampler, 0);
    highp float _COLORS      = float(lut_tex_size.x / lut_tex_size.y);

    highp vec4 color       = subpassLoad(in_color).rgba;
    
    highp float blueColor = color.b * (_COLORS - 1.0);

    highp vec2 uv1 = vec2((color.r+ floor(blueColor))/_COLORS,color.g);
    highp vec2 uv2 = vec2((color.r+ ceil(blueColor))/_COLORS,color.g);

    highp vec4 c1 = texture(color_grading_lut_texture_sampler, uv1);
    highp vec4 c2 = texture(color_grading_lut_texture_sampler, uv2);
    
    // interpolation of two samplings
    highp vec4 newColor = mix(c1, c2, fract(blueColor));

    out_color =  mix(color,newColor,ColorGridingIntensity);
}
