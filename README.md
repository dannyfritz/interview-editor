# Editor Interview Exercise

A TDD based interview.

Origin of this interview is unknown, but it started when I worked at Galvanize Inc in about 2015.
Possibly originated from Jeff Dean.

## Parties Involved

- _Interviewer_: The person conducting the interview. The driver.
- _Interviewee_: The person being interviewwd. The navigator.

## Process

### Pre-Interview Prep

1. Clone or reset interview repo
1. Run `npm test` to ensure it is ready to go.
   - It should fail with 1 test run and many skipped.
1. Open the repo in the editor of the Interviewer's choice
1. Position the test runner and editor on the monitor so both can be seen at the same time

### Interview

1. Introductions
   - Name
   - Brief employment history
   - Favorite bird
1. Explanation of process to interviewee
   - It is not the expectation to pass all tests
1. Interviewer shares screen
1. Pairing begins
   - Using search engines is allowed, but should be done on the interviewer's shared screen
   - Interviewee is the navigator of the programming session. They tell the interviewer what to do.
   - Interviewer is the driver of the programming session. They implement what the interviewee says.
   - Each time a test passes, turn on the next test
   - Tests are intentionally increasing in difficulty
   - The interviewer is allowed to aid the interviewee when stuck
1. Time ends or all tests are complete
1. Debrief interviewee
   - If time permits, ask what could be improved
   - Don't let them be discouraged if they didn't pass all tests

### Assessment

| Area            | Bad                                             | Good                                     | Great                                     |
| --------------- | ----------------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| JS/TS Knowledge | Needed to rely on interviewer for all knowledge | Knew methods but looked up specifics     | Didn't need to rely on the internet much  |
| Problem Solving | Could not get past the first 3 tests            | Passed all tests except redo             | Passed all tests                          |
| Collaboration   | Was not receptive to ideas from the interviewer | Receptive, but did not ask for help      | Knew when to ask for help                 |
| Friendliness    | Was not nice                                    | Was nice                                 | You liked this person                     |
| Communication   | Never spoke except to give commands             | Sometimes shared what they were thinking | Adequately shared what they were thinking |
| Patience        | Constant interuption                            | Some interuption                         | Few or no interuptions                    |
