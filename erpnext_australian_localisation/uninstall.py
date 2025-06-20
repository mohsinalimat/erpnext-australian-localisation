import frappe

from erpnext_australian_localisation.setup import get_property_setters


def before_uninstall():

    field_map = {
        "doctype": "doc_type",
        "fieldname": "field_name",
    }

    property_setters = get_property_setters()
    for property_setter in property_setters:
        for key, fieldname in field_map.items():
            if key in property_setter:
                property_setter[fieldname] = property_setter.pop(key)

        frappe.db.delete("Property Setter", property_setter)