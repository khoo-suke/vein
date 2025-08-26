// "use client";

// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { useEffect, useMemo, useState } from "react";
// import styles from "./index.module.scss";

// interface Location {
//   lat: number;
//   lng: number;
// }

// export const ShopInfoMap: React.FC = () => {
//   const location = useMemo<Location>(
//     () => ({ lat: 35.705886, lng: 139.843169 }),
//     []
//   );
//   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "";

//   const [map, setMap] = useState<google.maps.Map | null>(null);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: apiKey,
//     libraries: ["marker"],
//   });

//   useEffect(() => {
//     if (!map) return;

//     const { AdvancedMarkerElement } = google.maps.marker;

//     new AdvancedMarkerElement({
//       map,
//       position: location,
//     });
//   }, [map, location]);

//   if (!isLoaded) return;

//   return (
//     <div className={styles.map}>
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "100%" }}
//         zoom={16}
//         center={location}
//         options={{ mapId: process.env.NEXT_PUBLIC_MAP_ID }}
//         onLoad={(mapInstance) => setMap(mapInstance)}
//       />
//     </div>
//   );
// };

"use client";

import styles from "./index.module.scss";

export const ShopInfoMap: React.FC = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25918.3291057325!2d139.83166768871956!3d35.70675701695821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188975704fd343%3A0xeae2b1cc27a844c4!2sVEIN!5e0!3m2!1sja!2sjp!4v1756195709308!5m2!1sja!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
