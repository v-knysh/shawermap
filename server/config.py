import yaml
# import logging

# from .validation import validate_config

def get_config():
    try:
        with open("config.yaml", 'r') as stream:
            data = yaml.load(stream)
            return data
            # return validate_config(data)
    except IOError:
        # logging.debug('Config is unavailable')
        return False
