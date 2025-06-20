// Copyright (c) 2025, frappe.dev@arus.co.in and contributors
// For license information, please see license.txt

frappe.ui.form.on("Australian Localisation Settings", {
	// refresh(frm) {

	// },
    after_save(frm) {
        // sets latest values in frappe.boot for current user
        // other users will still need to refresh page
        Object.assign(australian_localisation_settings, frm.doc);
        frappe.ui.toolbar.clear_cache()
    },
});

frappe.tour['Australian Localisation Settings'] = [
	{
		fieldname: "make_tax_category_mandatory",
		title: "Make Tax Category Mandatory",
		description: "If this field is enabled, then Tax Category field in Supplier, Customer and Item (in Tax tab) Master will become mandatory",
        position: "Right"
	}
];