export interface Navigator {
  requestMIDIAccess(options?: { sysex: boolean }): Promise<MIDIAccess>;
}

export interface MIDIAccess {
  inputs: Map<string, MIDIInput>;
  outputs: Map<string, MIDIOutput>;
  onstatechange: (e: MIDIConnectionEvent) => void;
}

export interface MIDIInput {
  id: string;
  name?: string;
  onmidimessage: (e: MIDIMessageEvent) => void;
}

export interface MIDIOutput {
  id: string;
  name?: string;
}

export interface MIDIConnectionEvent extends Event {
  port: MIDIInput | MIDIOutput;
}

export interface MIDIMessageEvent extends Event {
  data: Uint8Array;
}
