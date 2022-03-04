import allure

from main.extensions.api_actions import ApiActions


class ApiFlows:
    @staticmethod
    @allure.step('POST flow')
    def post_flows(dictionary: dict, url):
        return ApiActions.post_action(dictionary, url)

    @staticmethod
    @allure.step('GET flow')
    def get_flows(dictionary: dict, url):
        return ApiActions.get_action(dictionary, url)


