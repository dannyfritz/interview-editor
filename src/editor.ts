type Action =
  | {
      type: "WRITE";
      payload: {
        value: string;
      };
    }
  | {
      type: "FIND_AND_REPLACE";
      payload: {
        from: string;
        to: string;
      };
    };

export class Editor {
  actions: Array<Action> = [];
  redos: Array<Action> = [];
  redo() {
    if (this.redos.length === 0) return;
    this.actions.push(this.redos.pop());
  }
  replace(from: string, to: string) {
    this.actions.push({
      type: "FIND_AND_REPLACE",
      payload: {
        from,
        to,
      },
    });
    this.redos = [];
  }
  toString(): string {
    return this.actions.reduce((output, action) => {
      switch (action.type) {
        case "WRITE":
          return output + action.payload.value;
        case "FIND_AND_REPLACE":
          return output.replaceAll(action.payload.from, action.payload.to);
        default:
          return output;
      }
    }, "");
  }
  undo() {
    this.redos.push(this.actions.pop());
  }
  write(text: string): void {
    this.actions.push({
      type: "WRITE",
      payload: {
        value: text,
      },
    });
    this.redos = [];
  }
}
