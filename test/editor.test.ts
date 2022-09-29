import { describe, expect, test } from "vitest";

import { Editor } from "../src/editor";

describe("Editor", () => {
  test("User can create an Editor", () => {
    const editor = new Editor();

    expect(editor).toBeInstanceOf(Editor);
  });

  test.skip("User can write text to Editor", () => {
    const editor = new Editor();

    editor.write("Hello - codez");
    expect(editor.toString()).to.equal("Hello - codez");

    editor.write(" moar");
    expect(editor.toString()).to.equal("Hello - codez moar");
  });

  test.skip("Users can undo writes", () => {
    const editor = new Editor();

    editor.write("Hello - codez");
    expect(editor.toString()).to.equal("Hello - codez");

    editor.write("Moar stuff");
    expect(editor.toString()).to.equal("Hello - codezMoar stuff");

    editor.write("Even more");
    expect(editor.toString()).to.equal("Hello - codezMoar stuffEven more");

    editor.undo();
    expect(editor.toString()).to.equal("Hello - codezMoar stuff");

    editor.undo();
    expect(editor.toString()).to.equal("Hello - codez");

    editor.undo();
    expect(editor.toString()).to.equal("");
  });

  test.skip("Users can find and replace text", () => {
    const editor = new Editor();

    editor.write("foo stuff");
    editor.write(" other foo");
    editor.replace("foo", "bar");
    expect(editor.toString()).to.equal("bar stuff other bar");
  });

  test.skip("Users can undo find and replace", () => {
    const editor = new Editor();

    editor.write("foo stuff");
    editor.write(" other foo");
    editor.replace("foo", "bar");
    expect(editor.toString()).to.equal("bar stuff other bar");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff other foo");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff");
  });

  test.skip("Users can redo actions", () => {
    const editor = new Editor();

    editor.write("foo stuff");
    editor.write(" other foo");
    editor.replace("foo", "bar");
    expect(editor.toString()).to.equal("bar stuff other bar");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff other foo");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff");

    editor.redo();
    expect(editor.toString()).to.equal("foo stuff other foo");

    editor.redo();
    expect(editor.toString()).to.equal("bar stuff other bar");
  });

  test.skip("Users cannot redo after performing an action", () => {
    const editor = new Editor();

    editor.write("foo stuff");
    editor.write(" other foo");
    editor.replace("foo", "bar");
    expect(editor.toString()).to.equal("bar stuff other bar");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff other foo");

    editor.undo();
    expect(editor.toString()).to.equal("foo stuff");

    editor.redo();
    expect(editor.toString()).to.equal("foo stuff other foo");

    editor.write(" Hello");
    expect(editor.toString()).to.equal("foo stuff other foo Hello");

    editor.redo();
    expect(editor.toString()).to.equal("foo stuff other foo Hello");
  });
});
