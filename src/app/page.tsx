import { getFrameHtmlResponse } from '../app/frames/frames';

const question = "Do you enjoy using Farcaster Frames?";
const option1 = "Yes";
const option2 = "No";
const initialVoteCount = { option1: 0, option2: 0 };

export default function Home() {
  return (
    <div>
      <h1>Farcaster Frame Voting</h1>
      <div dangerouslySetInnerHTML={{ __html: getFrameHtmlResponse(question, option1, option2, initialVoteCount) }} />
    </div>
  );
}