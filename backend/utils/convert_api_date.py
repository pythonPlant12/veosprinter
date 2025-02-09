from datetime import datetime, date


def convert_to_datetime(date_dict):
    year = date_dict["year"]
    month = date_dict["month"]
    day = date_dict["day"]
    return datetime(year, month, day)


def convert_to_date(date_dict):
    year = date_dict["year"]
    month = date_dict["month"]
    day = date_dict["day"]
    return date(year, month, day)
