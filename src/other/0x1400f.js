// Module 0x1400f
// Args: _0x4e6476, _0xeae121

export default (_0x4e6476, _0xeae121) => {
                'use strict';
                const _0x1b805e = a0_0x6932;
                Object['defineProperty'](_0xeae121, '__esModule', {
                    'value': !0x0
                }), _0xeae121['default'] = '#ifdef GL_FRAGMENT_PRECISION_HIGH\n#define highmedp highp\n#else\n#define highmedp mediump\n#endif\nprecision highmedp float;\n\n// Scene buffer\nuniform sampler2D uMainSampler; \nvarying vec2 outTexCoord;\n\n// Effect parameters\nuniform float intensity;\nuniform vec2 texSize;\nuniform vec2 center;\nuniform float radius;\n\nvoid main (void) {\n  vec2 tc = outTexCoord * texSize;  \n  tc -= center;\n  float dist = length(tc) / radius;\n  float intens = intensity; \n  if(dist > 1.0) {\n    intens = 0.0;\n  }\n  tc += center;\n  vec4 front = texture2D(uMainSampler, tc / texSize);\n  vec3 inverse = vec3(front.a - front.rgb);\n  gl_FragColor = vec4(mix(front.rgb, inverse, intens), front.a);\n}\n';
            };
