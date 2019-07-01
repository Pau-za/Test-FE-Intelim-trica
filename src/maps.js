const API_KEY = 'AIzaSyDNDCEjRGp3ZeUH6ncYh2EFrRn1Y1jNOyw';

const CALLBACK_NAME = 'initMap';

let initialized = !!window.google;
let resolveInitPromise;
let rejectInitPromise;
//Handling initialization statos fo google maps script
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve;
  rejectInitPromise = reject;
});

export default function init() {
  if (initialized) return initPromise;
  initialized = true;
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google);
  //Injecting a new script tag into head tag of the HTML to load the GoogleMaps script
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
  script.onerror = rejectInitPromise;
  document.querySelector('head').appendChild(script);
  return initPromise;

}
