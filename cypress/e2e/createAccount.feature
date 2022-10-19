Feature: Book Appointment

    Scenario Outline: Schedule an appointment with a client

        Given User is at the onboarding page
        When User fill the fields on Personal Details
        Then The Webpage will send a link to email and a successful message
