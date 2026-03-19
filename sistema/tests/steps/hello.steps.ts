import { loadFeature, defineFeature } from 'jest-cucumber';
import { GET } from '../../src/app/api/hello/route';

const feature = loadFeature('./tests/features/hello.feature');

defineFeature(feature, (test) => {
  test('Get a greeting message', ({ given, when, then }) => {
    let response: Response;
    let responseData: any;

    given('the API is available', () => {
      // The API handler GET is available locally since we imported it directly
    });

    when('I request the greeting', async () => {
      response = await GET() as Response;
      responseData = await response.json();
    });

    then(/^I should receive a message "(.*)"$/, (expectedMessage: string) => {
      expect(responseData.message).toBe(expectedMessage);
      expect(responseData.timestamp).toBeDefined();
    });
  });
});
