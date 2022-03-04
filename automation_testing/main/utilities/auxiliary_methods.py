import allure

from main.utilities.manage_ddt import get_data


@allure.step('Get parameters from the config file (GET).')
def get_GET_parameters():
    get_params = split_params(get_data('GET_PARAMETERS'))
    return get_params


@allure.step('Get parameters from the config file (POST).')
def get_POST_parameters():
    post_params = split_params(get_data('POST_PARAMETERS'))
    return post_params


@allure.step('Split parameters string.')
def split_params(data):
    params = data.split(', ')
    for index in range(len(params)):
        actions = params[index].split(':')
        params[index] = tuple(actions)
    return params