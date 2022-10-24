Feature: Create Account

    Scenario Outline: Creating account on wensite

        Given User is at the onboarding page
        When User fill the fields on personal details
        Then The webpage will send a link to email and a successfully message
