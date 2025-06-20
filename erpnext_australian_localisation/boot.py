import frappe

def set_bootinfo(bootinfo):
    australian_localisation_settings = frappe.get_cached_doc("Australian Localisation Settings").as_dict()
    bootinfo["australian_localisation_settings"] = australian_localisation_settings