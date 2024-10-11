import { Lum0x } from "lum0x-sdk";

Lum0x.init(process.env.LUM0X_API_KEY || "");

export async function getUserPfpUrl(fid: number): Promise<string> {
  const res = await Lum0x.farcasterUser.getUserByFids({ fids: String(fid) });
  const user = res.users[0];
  return user.pfp_url;
}

export async function getUserDisplayName(fid: number): Promise<string> {
  const res = await Lum0x.farcasterUser.getUserByFids({ fids: String(fid) });
  const user = res.users[0];
  return user.display_name;
}

export async function postLum0xTestFrameValidation(fid: number, path: string) {
  fetch("https://testnetapi.lum0x.com/frame/validation", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      farcasterFid: fid,
      frameUrl: `${process.env.BASE_URL}/api/${path}`,
    }),
  });
}

export async function isFollower(
  // fids: string | undefined,
  viewer_fid: number | undefined
) {
  let res = await Lum0x.farcasterUser.getUserByFids({
    fids: "771900", //user : xo-official
    viewer_fid: viewer_fid,
  });

  let isFollower = res.users[0].viewer_context?.following;
  return isFollower;
}
