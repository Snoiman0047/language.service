import xml.etree.ElementTree as ET
import allure


@allure.step('Get data from config_data.xml.')
def get_data(node_name):
    root = ET.parse('../configuration/config_data.xml').getroot()
    return root.find('.//' + node_name).text

