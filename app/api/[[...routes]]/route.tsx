/** @jsxImportSource frog/jsx */

import { postLum0xTestFrameValidation } from "@/app/utils/helpers";
import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { useState } from "frog/jsx";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

type State = {
  showNotification: boolean;
};

const app = new Frog<{ State: State }>({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: "Frog Frame",
  initialState: {
    showNotification: false,
  },
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", async (c) => {
  const fid = c.frameData?.fid;
  const { deriveState } = c;
  await postLum0xTestFrameValidation(Number(fid), "app");
  const state = deriveState((previousState) => {
    !previousState;
  });
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(to right, #432889, #17101F)",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          +5 $xoxo Someone DM you
        </div>
        {!state.showNotification && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              backgroundColor: "rgba(0, 0, 0, .35)",
              borderColor: "rgba(0, 0, 0, .5)",
              color: "white",
              padding: "15px",
              borderRadius: "5px",
              width: "100%",
              zIndex: 1000,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>
              you have to follow first
            </div>
            <button
              onClick={() => {
                console.log("here!");
                state.showNotification = false;
              }}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    ),
    intents: [
      <Button action="/profile">Reveal</Button>,
      <Button action="/status">Check My $XOXO</Button>,
    ],
  });
});

app.frame("/profile", async (c) => {
  const fid = c.frameData?.fid;
  await postLum0xTestFrameValidation(Number(fid), "profile");

  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(to right, #432889, #17101F)",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 30,
              padding: "0 120px",
              whiteSpace: "pre-wrap",
              borderRadius: "100%",
              border: "solid",
            }}
          >
            image
          </div>
          <div
            style={{
              color: "white",
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 30,
              padding: "0 120px",
              whiteSpace: "pre-wrap",
            }}
          >
            32, 🇺🇸 Paul
          </div>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          You looks cool
        </div>
      </div>
    ),
    intents: [
      <Button.Link href="page.rooit.net/link/profile.qiz8pc5.farcaster">
        Chat on XO
      </Button.Link>,
    ],
  });
});

app.frame("/status", async (c) => {
  const fid = c.frameData?.fid;
  await postLum0xTestFrameValidation(Number(fid), "status");

  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(to right, #432889, #17101F)",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          Your $XOXO Status
        </div>
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          100 $XOXO
        </div>
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          129 DMs
        </div>
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          ==Funny phrase==
        </div>
      </div>
    ),
    intents: [
      <Button action="/">Back</Button>,
      <Button.Link href="page.rooit.net/link/profile.qiz8pc5.farcaster">
        Download XO
      </Button.Link>,
    ],
  });
});
devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
