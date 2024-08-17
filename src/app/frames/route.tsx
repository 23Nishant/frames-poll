import { NextRequest, NextResponse } from 'next/server';
import { validateFrameRequest, getFrameHtmlResponse } from '../frames/frames';

let voteCount = { option1: 0, option2: 0 };
const question = "Do you enjoy using Farcaster Frames?";
const option1 = "Yes";
const option2 = "No";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const message = await validateFrameRequest(req);
  
  if (!message) {
    return NextResponse.json({ error: 'Invalid frame request' }, { status: 400 });
  }

  if (message.button === 1) {
    voteCount.option1++;
  } else if (message.button === 2) {
    voteCount.option2++;
  }

  return new NextResponse(getFrameHtmlResponse(question, option1, option2, voteCount));
}

export const dynamic = 'force-dynamic';