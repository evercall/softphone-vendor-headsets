import { VendorImplementation } from "../services/vendor-implementations/vendor-implementation";

type Events = {
    implementationChanged: VendorImplementation;
    deviceHoldStatusChanged: EventInfo;
    deviceMuteStatusChanged: EventInfo;
    deviceAnsweredCall: EventInfo;
    deviceEndedCall: EventInfo
    deviceRejectedCall: RejectCallEventInfo
    loggableEvent: EventInfo;
}

type EventInfo = {
    name: string;
    event: any;
    code?: string;
    isMuted?: boolean;
    holdRequested?: boolean;
    toggle?: boolean;
    conversationId?: string;
};

type RejectCallEventInfo = {
    conversationId: string;
}

export type HeadsetEvent<T = keyof Events> = T extends keyof Events
    ? { event: T, payload: Events[T] }
    : never;