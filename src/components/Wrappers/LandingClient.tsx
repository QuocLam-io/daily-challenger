// "use client";

// import { useEffect, useState } from "react";
// // import FilledLanding from "@/components/pages/EmptyLanding";
// import EmptyLanding from "@/components/public-landing/EmptyLanding";

// export default function LandingClient() {
//   const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

//   useEffect(() => {
//     const data = localStorage.getItem("publicChallenge");
//     if (data) {
//       setHasPublicChallenge(true);
//     }
//   }, []);

//   return hasPublicChallenge ? <h1>blub</h1> : <EmptyLanding />;
// }

"use client";

import { useEffect, useState } from "react";
import EmptyLanding from "@/components/public-landing/EmptyLanding";
import LoadingWrapper from "@/components/wrappers/LoadingWrapper";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

  const loadPublicChallenge = async () => {
    const data = localStorage.getItem("publicChallenge");
    setHasPublicChallenge(Boolean(data));
    return Boolean(data);
  };

  return (
    <LoadingWrapper
      loadFn={loadPublicChallenge}
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    >
      {/* {hasPublicChallenge ? <h1>blub</h1> : <EmptyLanding />} */}
      <EmptyLanding />
    </LoadingWrapper>
  );
}
