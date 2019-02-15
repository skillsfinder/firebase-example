const admin = require("firebase-admin");
const test = require("firebase-functions-test")();

jest.mock("firebase-admin");

describe("index", () => {
  let myFunctions, addFn;

  beforeEach(() => {
    admin.initializeApp.mockReturnValue();

    addFn = jest.fn().mockResolvedValue("my-message");

    const db = {
      collection: () => ({
        add: addFn
      })
    };

    admin.firestore = jest.fn().mockReturnValue(db);

    myFunctions = require("../index");
  });

  afterEach(() => {
    test.cleanup();
  });

  it("adds query.text to the database and calls res.send with a message", done => {
    const req = { query: { text: "input" } };
    const res = {
      send: message => {
        expect(message).toBe("message my-message added");
        expect(addFn).toBeCalledWith({ original: "input" });
        done();
      }
    };

    myFunctions.addMessage(req, res);
  });
});
