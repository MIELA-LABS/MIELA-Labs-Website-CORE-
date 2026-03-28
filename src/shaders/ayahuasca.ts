export const ayahuascaFrag = `
precision highp float;
uniform float time;
uniform vec2 resolution;

// smoother random-like function for micro-warping
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.31, 31.77))) * 71421.54);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f*f*(3.0 - 2.0*f);
  return mix(
    mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), f.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
  f.y);
}

vec3 palette(float t) {
  vec3 a = vec3(0.45, 0.4, 0.38);    // base tone
  vec3 b = vec3(0.30, 0.25, 0.25);   // depth shift
  vec3 c = vec3(1.0, 0.9, 0.8);      // highlight
  vec3 d = vec3(0.05, 0.25, 0.55);   // psychedelic drift
  return a + b*cos(6.28318*(c*t + d));
}

mat2 rot(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c,-s,s,c);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / resolution.y;
  vec2 base = uv;

  float t = time * 0.35;
  vec3 color = vec3(0.0);

  // extend the iteration depth
  for(float i = 0.0; i < 7.0; i++) {

    // kaleidoscope / folding
    uv = abs(uv);
    uv = uv * rot(0.4 + t * 0.25 + i * 0.1);

    // domain warp: sin + noise hybrid
    float m = noise(uv * 3.5 + t * 1.2);
    uv += 0.25 * vec2(
      sin(uv.y * 4.0 + t*1.5 + m*2.0),
      sin(uv.x * 4.0 + t*1.7 + m*2.0)
    );

    // Shipibo-line neon pulses
    float d = length(uv) * exp(-length(base)*0.7);
    float wave = sin(d*12.0 + t*3.0 + i*0.6);
    wave = abs(wave);

    // neon sharpening
    wave = pow(0.006 / wave, 1.35);

    // color based on iteration depth
    vec3 col = palette(d*0.7 + i*0.35 + t*0.5);

    color += col * wave;
  }

  // central glow tunnel
  float center = exp(-length(base) * 1.2);
  color *= center * 1.3;

  // bloom-ish tone mapping
  color = pow(color, vec3(0.72));

  gl_FragColor = vec4(color, 1.0);
}
`;
