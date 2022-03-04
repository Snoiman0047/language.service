import allure


class Verifications:

    @staticmethod
    @allure.step('Verify the actual text is same as expected text.')
    def verify_equals(actual_text, expected_text, massage):
        assert actual_text == expected_text, massage
