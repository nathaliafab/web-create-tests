Feature: API Hello Route

  Scenario: Get a greeting message
    Given the API is available
    When I request the greeting
    Then I should receive a message "Hello from the Next.js API running in Docker!"
