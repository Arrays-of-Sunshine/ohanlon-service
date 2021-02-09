import http from 'k6/http';
import { Rate } from 'k6/metrics';

let errorRate = new Rate('errorRate');

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      startRate: 1,
      timeUnit: '1s',
      preAllocatedVUs: 100,
      maxVUs: 500,
      stages: [
        { target: 10, duration: '30s' },
        { target: 100, duration: '30s' },
        { target: 500, duration: '30s' },
        { target: 750, duration: '30s' },
        { target: 1000, duration: '30s' }
      ]
    }
  }
};

export default function () {
  let id = Math.floor(Math.random() * 10000000) + 1;
  let res = http.get(`http://localhost:3000/products/${id}/reviews`);

  errorRate.add(res.status >= 400);
}

/*
K6 TEST DATA:
  data_received..............: 16 MB  106 kB/s
  data_sent..................: 5.7 MB 38 kB/s
  errorRate..................: 0.00%  ✓ 0     ✗ 55814
  http_req_blocked...........: avg=4.05µs  min=1µs     med=3µs      max=867µs   p(90)=4µs    p(95)=4µs
  http_req_connecting........: avg=865ns   min=0s      med=0s       max=799µs   p(90)=0s     p(95)=0s
  http_req_duration..........: avg=1.23ms  min=412µs   med=690µs    max=86.19ms p(90)=1.38ms p(95)=2.76ms
  http_req_receiving.........: avg=28.71µs min=9µs     med=27µs     max=607µs   p(90)=39µs   p(95)=44µs
  http_req_sending...........: avg=13.81µs min=5µs     med=13µs     max=609µs   p(90)=17µs   p(95)=19µs
  http_req_tls_handshaking...: avg=0s      min=0s      med=0s       max=0s      p(90)=0s     p(95)=0s
  http_req_waiting...........: avg=1.18ms  min=387µs   med=648µs    max=86.15ms p(90)=1.32ms p(95)=2.71ms
  http_reqs..................: 55814  372.053385/s
  iteration_duration.........: avg=1.33ms  min=469.1µs med=787.74µs max=86.3ms  p(90)=1.52ms p(95)=2.89ms
  iterations.................: 55814  372.053385/s
  vus........................: 100    min=100 max=100
  vus_max....................: 100    min=100 max=100
*/
