import pytest

from main.extensions.verifications import Verifications
from main.utilities.auxiliary_methods import *
from main.utilities.manage_ddt import get_data
from main.utilities import base
from main.work_flows.api_flows import ApiFlows


class Test_Server:

    @allure.title('POST request test.')
    @allure.description('This test is verifying a POST request.')
    @pytest.mark.parametrize('value, expected_status_code_result', get_POST_parameters())
    def test_post_request(self, value, expected_status_code_result):
        base.word['text'] = value
        base.status_code = ApiFlows.post_flows(base.word, get_data('SERVER_URL') + get_data('POST_RESOURCE')).status_code
        Verifications.verify_equals(base.status_code, int(expected_status_code_result), 'Unexpected status-code.')

    @allure.title('GET request test.')
    @allure.description('This test is verifying a GET request.')
    @pytest.mark.parametrize('value, expected_status_code_result', get_GET_parameters())
    def test_get_request(self, value, expected_status_code_result):
        base.word['text'] = value
        base.status_code = ApiFlows.get_flows(base.word, get_data('SERVER_URL') + get_data('GET_RESOURCE')).status_code
        Verifications.verify_equals(base.status_code, int(expected_status_code_result), 'Unexpected status-code.')
