import { ReasoningUIPart } from "ai";
import { Reasoning } from "../ai-elements/reasoning";
import { ReasoningTrigger } from "../ai-elements/reasoning";
import { ReasoningContent } from "../ai-elements/reasoning";

export function ReasoningPart({ part, isStreaming = false, duration }: { part: ReasoningUIPart; isStreaming?: boolean; duration?: number }) {
    return <Reasoning isStreaming={isStreaming} duration={duration} className="mb-0">
        <ReasoningTrigger />
        {part.text && <ReasoningContent>
            {part.text}
        </ReasoningContent>}
    </Reasoning>;
}