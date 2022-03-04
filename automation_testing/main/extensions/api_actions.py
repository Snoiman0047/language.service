import allure
import requests


class ApiActions:
    @staticmethod
    @allure.step('POST action.')
    def post_action(dictionary: dict, url):
        response = requests.post(url, data=dictionary)
        return response

    @staticmethod
    @allure.step('GET action.')
    def get_action(dictionary: dict, url):
        response = requests.get(url, data=dictionary)
        return response

