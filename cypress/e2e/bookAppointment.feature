Feature: Booking an appointment

    Scenario Outline: Schedule an appointment with client

        Given User access the Login page
        When User access create appointment
        When fill the all mandatories fields with valid data
        Then the system will return a sucessufully message

    Scenario Outline: Schedule an overlap appointment with client

        Given User access the Login page
        When User access create appointment
        When fill in all mandatory fields overlaying an appointment already scheduled
        Then the system will return an alert message informing you of the overlap

    Scenario Outline: Schedule an appointment missing Price mandatory field

        Given User access the Login page
        When User access create appointment
        When fill in the fields and do not inform the price field
        Then the system will return an error message