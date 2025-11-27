import { UIMessage, ToolCallPart, ToolResultPart } from "ai";
import { Response } from "@/components/ai-elements/response";
import { ReasoningPart } from "./reasoning-part";
import { ToolCall, ToolResult } from "./tool-call";

export function AssistantMessage({ message, status, isLastMessage, durations, onDurationChange }: { 
    message: UIMessage; 
    status?: string; 
    isLastMessage?: boolean; 
    durations?: Record<string, number>; 
    onDurationChange?: (key: string, duration: number) => void 
}) {
    return (
        <div style={{ width: "100%" }}>
            {/* Purple box */}
            <div
                style={{
                    backgroundColor: "#6A0DAD",   // Purple
                    color: "white",               // White text
                    fontWeight: "bold",           // Bold text
                    padding: "16px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    fontSize: "14px"
                }}
            >
                {message.parts.map((part, i) => {
                    const isStreaming =
                        status === "streaming" &&
                        isLastMessage &&
                        i === message.parts.length - 1;

                    const durationKey = `${message.id}-${i}`;
                    const duration = durations?.[durationKey];

                    if (part.type === "text") {
                        return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                    } else if (part.type === "reasoning") {
                        return (
                            <ReasoningPart
                                key={`${message.id}-${i}`}
                                part={part}
                                isStreaming={isStreaming}
                                duration={duration}
                                onDurationChange={
                                    onDurationChange
                                        ? (d) => onDurationChange(durationKey, d)
                                        : undefined
                                }
                            />
                        );
                    } else if (part.type.startsWith("tool-") || part.type === "dynamic-tool") {
                        if ("state" in part && part.state === "output-available") {
                            return (
                                <ToolResult
                                    key={`${message.id}-${i}`}
                                    part={part as unknown as ToolResultPart}
                                />
                            );
                        } else {
                            return (
                                <ToolCall
                                    key={`${message.id}-${i}`}
                                    part={part as unknown as ToolCallPart}
                                />
                            );
                        }
                    }

                    return null;
                })}
            </div>
        </div>
    );
}
