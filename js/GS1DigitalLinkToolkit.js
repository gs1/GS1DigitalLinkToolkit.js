class GS1DigitalLinkToolkit {
	
	// constructor sets up various data resources shared by multiple methods
	constructor() {
		
		// list of all GS1 Application Identifiers as defined in GS1 General Specifications v18
		const aitable=[{"title":"Serial Shipping Container Code (SSCC) ","label":"SSCC","shortcode":"sscc","ai":"00","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{18})"},{"title":"Global Trade Item Number (GTIN)","label":"GTIN","shortcode":"gtin","ai":"01","format":"N14","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["22","10","21"],"regex":"(\\d{12,14}|\\d{8})"},{"title":"GTIN of contained trade items","label":"CONTENT","ai":"02","format":"N14","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{14})"},{"title":"Batch or lot number","label":"BATCH/LOT","shortcode":"lot","ai":"10","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Production date (YYMMDD)","label":"PROD DATE","ai":"11","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Due date (YYMMDD)","label":"DUE DATE","ai":"12","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Packaging date (YYMMDD)","label":"PACK DATE","ai":"13","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Best before date (YYMMDD)","label":"BEST BEFORE or BEST BY","ai":"15","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Sell by date (YYMMDD)","label":"SELL BY","ai":"16","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Expiration date (YYMMDD)","label":"USE BY OR EXPIRY","shortcode":"exp","ai":"17","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Internal product variant","label":"VARIANT","ai":"20","format":"N2","type":"D","fixedLength":true,"regex":"(\\d{2})"},{"title":"Serial number","label":"SERIAL","shortcode":"ser","ai":"21","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Consumer product variant","label":"CPV","shortcode":"cpv","ai":"22","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Additional product identification assigned by the manufacturer","label":"ADDITIONAL ID","ai":"240","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Customer part number","label":"CUST. PART NO.","ai":"241","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Made-to-Order variation number","label":"MTO VARIANT","ai":"242","format":"N..6","type":"D","fixedLength":false,"regex":"(\\d{0,6})"},{"title":"Packaging component number","label":"PCN","ai":"243","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Secondary serial number","label":"SECONDARY SERIAL","ai":"250","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Reference to source entity","label":"REF. TO SOURCE ","ai":"251","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Document Type Identifier (GDTI)","label":"GDTI","shortcode":"gdti","ai":"253","format":"N13+X..17","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,17})"},{"title":"GLN extension component","label":"GLN EXTENSION COMPONENT","shortcode":"glnx","ai":"254","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Coupon Number (GCN)","label":"GCN","shortcode":"gcn","ai":"255","format":"N13+N..12","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})(\\d{0,12})"},{"title":"Variable count of items (variable measure trade item)","label":"VAR. COUNT","ai":"30","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3100","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3101","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3102","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3103","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3104","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3105","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3110","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3111","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3112","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3113","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3114","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3115","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3120","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3121","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3122","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3123","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3124","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3125","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3130","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3131","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3132","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3133","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3134","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3135","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3140","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3141","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3142","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3143","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3144","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3145","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3150","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3151","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3152","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3153","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3154","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3155","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3160","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3161","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3162","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3163","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3164","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3165","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3200","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3201","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3202","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3203","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3204","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3205","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3210","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3211","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3212","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3213","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3214","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3215","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3220","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3221","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3222","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3223","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3224","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3225","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3230","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3231","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3232","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3233","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3234","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3235","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3240","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3241","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3242","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3243","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3244","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3245","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3250","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3251","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3252","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3253","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3254","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3255","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3260","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3261","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3262","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3263","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3264","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3265","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3270","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3271","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3272","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3273","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3274","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3275","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3280","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3281","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3282","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3283","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3284","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3285","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3290","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3291","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3292","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3293","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3294","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3295","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3300","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3301","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3302","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3303","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3304","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3305","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3310","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3311","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3312","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3313","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3314","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3315","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3320","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3321","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3322","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3323","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3324","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3325","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3330","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3331","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3332","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3333","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3334","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3335","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3340","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3341","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3342","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3343","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3344","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3345","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3350","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3351","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3352","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3353","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3354","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3355","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3360","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3361","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3362","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3363","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3364","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3365","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3370","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3371","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3372","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3373","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3374","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3375","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3400","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3401","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3402","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3403","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3404","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3405","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3410","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3411","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3412","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3413","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3414","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3415","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3420","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3421","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3422","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3423","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3424","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3425","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3430","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3431","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3432","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3433","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3434","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3435","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3440","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3441","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3442","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3443","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3444","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3445","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3450","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3451","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3452","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3453","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3454","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3455","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3460","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3461","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3462","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3463","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3464","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3465","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3470","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3471","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3472","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3473","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3474","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3475","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3480","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3481","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3482","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3483","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3484","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3485","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3490","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3491","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3492","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3493","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3494","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3495","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3500","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3501","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3502","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3503","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3504","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3505","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3510","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3511","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3512","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3513","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3514","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3515","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3520","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3521","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3522","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3523","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3524","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3525","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3530","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3531","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3532","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3533","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3534","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3535","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3540","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3541","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3542","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3543","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3544","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3545","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3550","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3551","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3552","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3553","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3554","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3555","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3560","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3561","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3562","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3563","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3564","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3565","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3570","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3571","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3572","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3573","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3574","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3575","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3600","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3601","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3602","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3603","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3604","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3605","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3610","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3611","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3612","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3613","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3614","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3615","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3620","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3621","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3622","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3623","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3624","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3625","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3630","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3631","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3632","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3633","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3634","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3635","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3640","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3641","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3642","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3643","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3644","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3645","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3650","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3651","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3652","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3653","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3654","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3655","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3660","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3661","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3662","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3663","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3664","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3665","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3670","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3671","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3672","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3673","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3674","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3675","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3680","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3681","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3682","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3683","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3684","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3685","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3690","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3691","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3692","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3693","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3694","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3695","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Count of trade items","label":"COUNT","ai":"37","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3900","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3901","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3902","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3903","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3904","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3905","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3906","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3907","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3908","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3909","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3910","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3911","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3912","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3913","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3914","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3915","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3916","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3917","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3918","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3919","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3920","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3921","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3922","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3923","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3924","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3925","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3926","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3927","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3928","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3929","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3930","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3931","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3932","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3933","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3934","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3935","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3936","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3937","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3938","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3939","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3940","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3941","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3942","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3943","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Customer's purchase order number","label":"ORDER NUMBER","ai":"400","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Identification Number for Consignment (GINC)","label":"GINC","shortcode":"ginc","ai":"401","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Shipment Identification Number (GSIN)","label":"GSIN","shortcode":"gsin","ai":"402","format":"N17","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{17})"},{"title":"Routing code","label":"ROUTE","ai":"403","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Ship to - Deliver to Global Location Number","label":"SHIP TO LOC","ai":"410","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Bill to - Invoice to Global Location Number","label":"BILL TO ","ai":"411","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Purchased from Global Location Number","label":"PURCHASE FROM","ai":"412","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Ship for - Deliver for - Forward to Global Location Number","label":"SHIP FOR LOC","ai":"413","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Identification of a physical location - Global Location Number","label":"LOC No","shortcode":"gln","ai":"414","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["254"],"regex":"(\\d{13})"},{"title":"Global Location Number of the invoicing party","label":"PAY TO","shortcode":"payto","ai":"415","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"GLN of the production or service location","label":"PROD/SERV LOC","ai":"416","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Ship to - Deliver to postal code within a single postal authority","label":"SHIP TO POST","ai":"420","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Ship to - Deliver to postal code with ISO country code","label":"SHIP TO POST","ai":"421","format":"N3+X..9","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,9})"},{"title":"Country of origin of a trade item","label":"ORIGIN","ai":"422","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country of initial processing","label":"COUNTRY - INITIAL PROCESS.","ai":"423","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"},{"title":"Country of processing","label":"COUNTRY - PROCESS.","ai":"424","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country of disassembly","label":"COUNTRY - DISASSEMBLY","ai":"425","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"},{"title":"Country covering full process chain","label":"COUNTRY - FULL PROCESS","ai":"426","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country subdivision Of origin","label":"ORIGIN SUBDIVISION","ai":"427","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"},{"title":"NATO Stock Number (NSN)","label":"NSN","ai":"7001","format":"N13","type":"D","fixedLength":true,"regex":"(\\d{13})"},{"title":"UN/ECE meat carcasses and cuts classification","label":"MEAT CUT","ai":"7002","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Expiration date and time","label":"EXPIRY TIME","shortcode":"expdt","ai":"7003","format":"N10","type":"D","fixedLength":true,"regex":"(\\d{10})"},{"title":"Active potency","label":"ACTIVE POTENCY","ai":"7004","format":"N..4","type":"D","fixedLength":false,"regex":"(\\d{0,4})"},{"title":"Catch area","label":"CATCH AREA","ai":"7005","format":"X..12","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,12})"},{"title":"First freeze date ","label":"FIRST FREEZE DATE","ai":"7006","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Harvest date","label":"HARVEST DATE","ai":"7007","format":"N6..12","type":"D","fixedLength":false,"regex":"(\\d{6,12})"},{"title":"Species for fishery purposes","label":"AQUATIC SPECIES","ai":"7008","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"},{"title":"Fishing gear type","label":"FISHING GEAR TYPE","ai":"7009","format":"X..10","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,10})"},{"title":"Production method","label":"PROD METHOD","ai":"7010","format":"X..2","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,2})"},{"title":"Refurbishment lot ID","label":"REFURB LOT","ai":"7020","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Functional status","label":"FUNC STAT","ai":"7021","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Revision status","label":"REV STAT","ai":"7022","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Individual Asset Identifier (GIAI) of an assembly","label":"GIAI - ASSEMBLY","ai":"7023","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 0","ai":"7030","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 1","ai":"7031","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 2","ai":"7032","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 3","ai":"7033","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 4","ai":"7034","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 5","ai":"7035","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 6","ai":"7036","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 7","ai":"7037","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 8","ai":"7038","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 9","ai":"7039","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Germany PZN","label":"NHRN PZN","ai":"710","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - France CIP","label":"NHRN CIP","ai":"711","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Spain CN","label":"NHRN CN","ai":"712","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Brasil DRN","label":"NHRN DRN","ai":"713","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Portugal AIM","label":"NHRN AIM","ai":"714","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Certification reference # 0","label":"CERT # 0","ai":"7230","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 1","label":"CERT # 1","ai":"7231","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 2","label":"CERT # 2","ai":"7232","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 3","label":"CERT # 3","ai":"7233","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 4","label":"CERT # 4","ai":"7234","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 5","label":"CERT # 5","ai":"7235","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 6","label":"CERT # 6","ai":"7236","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 7","label":"CERT # 7","ai":"7237","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 8","label":"CERT # 8","ai":"7238","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Certification reference # 9","label":"CERT # 9","ai":"7239","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"},{"title":"Roll products (width, length, core diameter, direction, splices)","label":"DIMENSIONS","ai":"8001","format":"N14","type":"D","fixedLength":true,"regex":"(\\d{14})"},{"title":"Cellular mobile telephone identifier","label":"CMT No","ai":"8002","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Returnable Asset Identifier (GRAI)","label":"GRAI","shortcode":"grai","ai":"8003","format":"N14+X..16","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{14})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,16})"},{"title":"Global Individual Asset Identifier (GIAI)","label":"GIAI","shortcode":"giai","ai":"8004","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Price per unit of measure","label":"PRICE PER UNIT","ai":"8005","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Identification of an individual trade item piece","label":"ITIP","shortcode":"itip","ai":"8006","format":"N14+N2+N2","type":"I","fixedLength":true,"checkDigit":"14","qualifiers":["22","10","21"],"regex":"(\\d{14})(\\d{2})(\\d{2})"},{"title":"International Bank Account Number (IBAN) ","label":"IBAN","ai":"8007","format":"X..34","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,34})"},{"title":"Date and time of production","label":"PROD TIME","ai":"8008","format":"N8+N..4","type":"D","fixedLength":false,"regex":"(\\d{8})(\\d{0,4})"},{"title":"Optically Readable Sensor Indicator","label":"OPT SEN","ai":"8009","format":"X..50","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,50})"},{"title":"Component/Part Identifier (CPID)","label":"CPID","shortcode":"cpid","ai":"8010","format":"Y..30","type":"I","fixedLength":false,"qualifiers":["8011"],"regex":"([\\x23\\x2D\\x2F\\x30-\\x39\\x41-\\x5A]{0,30})"},{"title":"Component/Part Identifier serial number (CPID SERIAL)","label":"CPID SERIAL","shortcode":"cpsn","ai":"8011","format":"N..12","type":"Q","fixedLength":false,"regex":"(\\d{0,12})"},{"title":"Software version","label":"VERSION","ai":"8012","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Model Number (GMN)","label":"GMN (for medical devices, the default, global data title is BUDI-DI )","ai":"8013","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Service Relation Number - Provider","label":"GSRN - PROVIDER","shortcode":"gsrnp","ai":"8017","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"},{"title":"Global Service Relation Number - Recipient","label":"GSRN - RECIPIENT","shortcode":"gsrn","ai":"8018","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"},{"title":"Service Relation Instance Number (SRIN)","label":"SRIN","shortcode":"srin","ai":"8019","format":"N..10","type":"Q","fixedLength":false,"regex":"(\\d{0,10})"},{"title":"Payment slip reference number","label":"REF No","ai":"8020","format":"X..25","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,25})"},{"title":"Identification of pieces of a trade item contained in a logistics unit","label":"ITIP CONTENT","ai":"8026","format":"N14+N2+N2","type":"D","fixedLength":true,"checkDigit":"14","regex":"(\\d{14})(\\d{2})(\\d{2})"},{"title":"Coupon code identification for use in North America","ai":"8110","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Loyalty points of a coupon","label":"POINTS","ai":"8111","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Paperless coupon code identification for use in North America","ai":"8112","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Extended Packaging URL ","label":"PRODUCT URL","ai":"8200","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Information mutually agreed between trading partners","label":"INTERNAL","ai":"90","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Company internal information","label":"INTERNAL","ai":"91","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"92","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"93","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"94","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"95","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"96","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"97","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"98","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"99","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"}];

		// Element Strings with predefined length using GS1 Application Identifiers, as defined in GS1 Gen Specs - see Figure 7.8.4-2 of GS1 Gen Specs v18 at https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf
		const fixedLengthTable={"00":20,"01":16,"02":16,"03":16,"04":18,"11":8,"12":8,"13":8,"14":8,"15":8,"16":8,"17":8,"18":8,"19":4,"20":4,"31":10,"32":10,"33":10,"34":10,"35":10,"36":10,"41":16};
		const aiRegex={};
		const aiShortCode={};
		const aiQualifiers={};
		const aiCheckDigitPosition={};

		for (var a in aitable) {
			if (aitable[a] !== undefined) {
		
				aiRegex[aitable[a].ai] = aitable[a].regex;

				if (aitable[a].shortcode !== undefined) {
				aiShortCode[aitable[a].ai] = aitable[a].shortcode;
				}
		
				if (aitable[a].qualifiers !== undefined) {
				aiQualifiers[aitable[a].ai] = aitable[a].qualifiers;
				}
		
				if (aitable[a].checkDigit !== undefined) {
				aiCheckDigitPosition[aitable[a].ai] = aitable[a].checkDigit;
				}
			}
		}
		



		function getIdentifiers(ai) {
			return ai.type == "I";
		}

		function getQualifiers(ai) {
			return ai.type == "Q";
		}

		function getDataAttributes(ai) {
			return ai.type == "D";
		}

		function getFixedLength(ai) {
			return ai.fixedLength == true;
		}

		function getVariableLength(ai) {
			return ai.fixedLength == false;
		}

		function getMatchesKeyword(keyword) {
			return function(ai) {
				return ai.title.indexOf(keyword) > -1;
			}
		}

		function getMatchesAI(num) {
			return function(el) {
				return el.ai == num;
			}
		}

		function byLength(length) {
			return function(element) {
				return element.ai.length == length;
			}
		}

		function getAIs(list) {
			var rv=[];
			for (var i in list) {
				rv.push(list[i].ai);
			} 
			return rv;
		}
		
		
		var identifiers=aitable.filter(getIdentifiers);
		var qualifiers=aitable.filter(getQualifiers);
		var dataAttributes=aitable.filter(getDataAttributes);
		var fixedLength=aitable.filter(getFixedLength);
		var variableLength=aitable.filter(getVariableLength);


		var identifierMap={};
		for (var i in identifiers) {
		 identifierMap[identifiers[i].ai]=identifiers[i];
		}

		var qualifierMap={};
		for (var q in qualifiers) {
			if (qualifiers[q] !== undefined) {
				qualifierMap[qualifiers[q].ai]=qualifiers[q];
			}
		}

		var attributeMap={};
		for (var a in dataAttributes) {
			if (dataAttributes[a] !== undefined) {
				attributeMap[dataAttributes[a].ai]=dataAttributes[a];
			}
		}


		var fixedLengthMap={};
		for (var f in fixedLength) {
			if (fixedLength[f] !== undefined) {
				fixedLengthMap[fixedLength[f].ai]=fixedLength[f];
			}
		}

		var variableLengthMap={};
		for (var v in variableLength) {
			if (variableLength[v] !== undefined) {
				variableLengthMap[variableLength[v].ai]=variableLength[v];
			}
		}

		var aiMaps={}
		aiMaps.identifiers=Object.keys(identifierMap);
		aiMaps.qualifiers=Object.keys(qualifierMap);
		aiMaps.dataAttributes=Object.keys(attributeMap);
		aiMaps.fixedLength=Object.keys(fixedLengthMap);
		aiMaps.variableLength=Object.keys(variableLengthMap);


		// TODO - not yet making checks on invalid and mandatory associations of GS1 Application Identifiers

		// from GS1 Gen Specs Figure 4.14.1-1. Invalid pairs of element strings
		// this table is symmetrical
		var invalidAssociations=[
		{"rule":"All occurrences of GTIN SHALL have one value.  It is for example not allowed to include GTINs of other packaging levels.","condition1":"01","condition2":["01"]},
		{"rule":"GTIN of contained trade items is intended to list the trade items contained in a logistic unit, and SHALL NOT be used to identify the contents of a trade item","condition1":"02","condition2":["01"]},
		{"rule":"The count of units contained SHALL only be used with GTIN of contained trade items.","condition1":"37","condition2":["01"]},
		{"rule":"A trade item SHALL NOT be identified as a coupon.","condition1":"255","condition2":["01"]},
		{"rule":"Only one ship to postal code SHALL be applied on the same physical entity","condition1":"420","condition2":["421"]},
		{"rule":"Country of origin, initial processing, processing, or disassembly SHALL NOT be used in combination with country of full porcessing, since this would lead to ambiguous data.","condition1":"426","condition2":["422","423","424","425"]},
		{"rule":"The element strings coupon value, percentage discount of a coupon and loyalty points of a coupon SHALL NOT be applied in combination.","condition1":"390\d","condition2":["394\d","8111"]},
		{"rule":"Only one amount patable element string SHALL be applied on a payment slip.","condition1":"391\d","condition2":["390\d"]},
		{"rule":"Only one amount payable element string SHALL be applied on a variable measure trade item.","condition1":"392\d","condition2":["393\d"]},
		{"rule":"The element strings percentage discount of a coupon and the loyalty points of a coupon SHALL NOT be applied in combination.","condition1":"394\d","condition2":["8111"]},
		{"rule":"The GTIN SHALL NOT be used in combination with the identification of an individual trade item piece.  The GTIN of the trade item to which the individual trade item piece belongs is contained in the element string","condition1":"8006","condition2":["01"]},
		{"rule":"Only one Global Service Relation Number (recipient of provider) SHALL be applied at one time for identification of an individual in a given service relationship","condition1":"8018","condition2":["8017"]},
		];

		// need to also have mandatory association table and forbidden association table from GS1 Gen Specs

		// from Figure 4.14.2-1. Mandatory association of element strings
		// this table is not symmetrical - it's one-way, given condition, require OR, AND, XOR to be satisfied where specified
		var mandatoryAssociations=[
		{"designation":"GTIN of a variable measure trade item scanned at POS","rule":"The GTIN of a variable measure trade item scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure ; Note: Master data will be needed to determine whether the GTIN represents a variable measure trade item scanned at POS. Also see the note below this table.","condition":["01"],"conditionN1":"0","OR":["30","3\d{3}"]},

		{"designation":"GTIN of a variable measure trade item not scanned at POS","rule":"The GTIN of a variable measure trade item not scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure; or * the dimensions of a roll product. Note: The first position of the GTIN is '9' for such trade items. Also see the note below this table.","condition":["01","02"],"conditionN1":"9","OR":["30","3\d{3}","8001"]},
		{"designation":"GTIN of a custom trade item.","rule":"The GTIN of a custom trade item SHALL be used in combination with the Made-to-Order variation number. Note: The first position of the GTIN is '9' for such trade items.","condition":["01"],"conditionN1":"9","EXACTLY":["242"]},

		{"designation":"GTIN of contained trade items","rule":"The GTIN of contained trade items SHALL occur in combination with an SSCC and the count of the trade items.","condition":["02"],"AND":["00","37"]},
		{"designation":"Batch/lot number","rule":"Batch/lot number SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.","condition":["10"],"XOR":["01","02","8006"]},
		{"designation":"Production date, packaging date, best before date, sell by date, expiration date (of a trade item)","rule":"These dates SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.","condition":["11","13","15","16","17"],"XOR":["01","02","8006"]},

		{"designation":"Due date","rule":"The due date SHALL occur in combination with the payment slip reference number and the GLN of the invoicing party","condition":["12"],"AND":["8020","415"]},

		{"designation":"Expiration date (of a coupon)","rule":"The expiration date of a coupon SHALL occur in combination with the GCN.","condition":["17"],"EXACTLY":["255"]},

		{"designation":"","rule":"","condition":["20"],"XOR":["01","02","8006"]},
		{"designation":"","rule":"","condition":["21"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["22"],"EXACTLY":["01"]},
		{"designation":"","rule":"","condition":["240"],"XOR":["01","02","8006"]},
		{"designation":"","rule":"","condition":["241"],"XOR":["01","02","8006"]},

		// *** 242 rule has N1=9 condition on 01,02,8006

		{"designation":"","rule":"","condition":["243"],"EXACTLY":["01"]},

		{"designation":"","rule":"","condition":["250"],"AND":["21"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["251"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["254"],"EXACTLY":["414"]},

		{"designation":"","rule":"","condition":["30"],"XOR":["01","02"]},
		{"designation":"","rule":"","condition":["3\d{3}"],"XOR":["01","02"]},
		{"designation":"","rule":"","condition":["3\d{3}"],"OR":["00","01"]},
		{"designation":"","rule":"","condition":["337\d"],"EXACTLY":["01"]},
		{"designation":"","rule":"","condition":["37"],"EXACTLY":["02"]},
		{"designation":"","rule":"","condition":["390\d"],"AND":["8020","415"]},
		{"designation":"","rule":"","condition":["390\d"],"EXACTLY":["255"]},



		];

		
		var shortCodeToNumeric = {};
		  for(var key in aiShortCode){
			shortCodeToNumeric[aiShortCode[key]] = key;
		}
		
		
		// exposed as public variables that can be accessed by methods
		this.aitable = aitable; 
		this.aiCheckDigitPosition = aiCheckDigitPosition;
		this.aiRegex = aiRegex;
		this.aiMaps = aiMaps;
		this.aiShortCode = aiShortCode;
		this.aiQualifiers = aiQualifiers;
		this.shortCodeToNumeric = shortCodeToNumeric;


		this.twoDigitAIs =getAIs(aitable.filter(byLength(2)));
		this.threeDigitAIs = getAIs(aitable.filter(byLength(3)));
		this.fourDigitAIs = getAIs(aitable.filter(byLength(4)));

		this.groupSeparator= String.fromCharCode(29);
		
	}

	// calculate the expected GS1 Check Digit for a given AI
	// e.g. calculateCheckDigit('01','01234567890128');
	calculateCheckDigit(ai,gs1IDValue) {
		var counter=0;
		var reversed="";
		var total=0;
		var l;
		if (this.aiCheckDigitPosition[ai] == "L") {
			l = gs1IDValue.length;
		} else {
			l = parseInt(this.aiCheckDigitPosition[ai]);
		}
		var multiplier;
		for (var i=l-2; i>=0; i--) {
			var d=gs1IDValue.substring(i,(i+1));
			if ((counter % 2) == 0) {
				multiplier=3;
			} else {
				multiplier=1;
			}
			total+=(d*multiplier);
			counter++;
		}
		var expectedCheckDigit=(10-(total%10))%10;
		return expectedCheckDigit;
	}



	// returns true if the GS1 Check Digit is valid (or not applicable)
	// throws an error if an invalid check digit is present
	// e.g. verifyCheckDigit('01','01234567890128');
	verifyCheckDigit(ai,gs1IDValue) {
		var expectedCheckDigit;
		var rv=true;

			var checkDigitPosition=this.aiCheckDigitPosition[ai];
			if (checkDigitPosition !== undefined) {
				expectedCheckDigit = this.calculateCheckDigit(ai,gs1IDValue);
				if (checkDigitPosition == "L") {
					checkDigitPosition=gs1IDValue.length;
				} else {
					checkDigitPosition=parseInt(checkDigitPosition);
				}
				var actualCheckDigit = parseInt(gs1IDValue.charAt(checkDigitPosition-1));
	
				if (actualCheckDigit !== expectedCheckDigit) { 
					rv=false;
					throw new Error("INVALID CHECK DIGIT:  An invalid check digit was found for the primary identification key ("+ai+")"+gs1IDValue+" ; the correct check digit should be "+expectedCheckDigit+" at position "+checkDigitPosition);
				}

		}
		return rv;
	}

	// tests the syntax of a value against the regular expression (expected format)
	// throws an error when invalid syntax is detected
	// e.g. verifySyntax('01','01234567890128');
	verifySyntax(ai,value) {
		var re = new RegExp("^"+this.aiRegex[ai]+"$");
		if (!(re.test(value))) {
			throw "SYNTAX ERROR: invalid syntax for value of ("+ai+") : "+value;
		}
	}

	// method to percent-encode all reserved characters mentioned in the GS1 Digital Link standard
	percentEncode(input) {
		var charsToEscape="#/%&+,!()*':;<=>?";
		var escaped=[];
		for (var i=0; i<input.length; i++) {
			var testChar = input.substr(i,1);
			if (charsToEscape.indexOf(testChar) > -1) {
				escaped.push("%"+testChar.charCodeAt(0).toString(16).toUpperCase());
			} else {
				escaped.push(testChar);
			}
		}
		return escaped.join("");
	}

	// method to percent-decode all percent-encoded characters
	percentDecode(input) {
		return decodeURIComponent(input);
	}


	// this method will convert either a bracketed element string or an unbracketed element string into an associative array
	// input could be "(01)05412345000013(3103)000189(3923)2172(10)ABC123";
	// or input could be "3103000189010541234500001339232172"+groupSeparator+"10ABC123";
	extractFromGS1elementStrings(elementStrings) {


		// remove symbology identifier if present
		// remove ]C1 or ]e0 or ]d2 or ]Q3
		elementStrings=elementStrings.replace(/^(]C1|]e0|]d2|]Q3)/ , '');

		// check if the initial AI is enclosed within round brackets
		var re=new RegExp("^\\((\\d{2,4}?)\\)");
		if (re.test(elementStrings)) {
			// do this if the input is a bracketed element string
			var r1=new RegExp("\\((\\d{2,4}?)\\)|([^(]+)","g");
			var aikeys = Object.keys(this.aiRegex);
			var obj={};
			var k;
			if (r1.test(elementStrings)) {
				var results=elementStrings.match(r1);
				for (var a in results) {
					if (a%2 == 0) {
						var l=results[a].length;
						k=results[a].substr(1,(l-2));
					} else {
						if (aikeys.includes(k)) {
							var r2=new RegExp("^"+this.aiRegex[k]+"$");
							if (r2.test(results[a])) {
								obj[k]=results[a];
							} else {
								throw new Error("SYNTAX ERROR: invalid syntax for value of ("+k+") : "+results[a]);
							}
						}
					}
				}
			}
			return obj;
		} else {
			// else do this if the input is an unbracketed element string
			// TODO neeed to change logic here to make use of fixedLengthTable and flowchart from GenSpecs

			var elementStringsLength=elementStrings.length;

			const fixedLengths={"00":20,"01":16,"02":16,"03":16,"04":18,"11":8,"12":8,"13":8,"14":8,"15":8,"16":8,"17":8,"18":8,"19":8,"20":4,"31":10,"32":10,"33":10,"34":10,"35":10,"36":10,"41":16}
			const fixedLengthAIs=Object.keys(fixedLengths);
			const gs=String.fromCharCode(29);
			var cursor=0;
			var buffer=[];

			// is any data present?

			do {

			// are the first two digits in table of fixedLengths
			var firstTwoDigits=elementStrings.substr(cursor,2)

			// ai.elementStrings=elementStrings;
			// ai.fixedLengthAIs = fixedLengthAIs;
			// ai.firstTwoDigits = firstTwoDigits;
			if (fixedLengthAIs.indexOf(firstTwoDigits) > -1) {
				// the first two digits are within the array of GS1 Application Identifiers of defined fixed length
	
				// extract the AI and value to the buffer
					var l = fixedLengths[firstTwoDigits];
					buffer.push(elementStrings.substr(cursor,l));
					cursor+=l;
	
				// if the next character is the group separator, move past it
				if (elementStrings.substr(cursor,1) == gs) {
					cursor++;
				}
	
	
	
	
			} else {
				// the first two digits are not within the array of GS1 Application Identifiers of defined fixed length
	
				// if string contains group separator
				var gsloc = elementStrings.substr(cursor).indexOf(gs);
				if (gsloc > -1) {
					// extract the AI and value up to the group separator to the buffer
					buffer.push(elementStrings.substr(cursor).substr(0,gsloc));
					cursor+=gsloc;
					cursor++;
		
		
				} else {
				// extract the AI and value to the buffer
					buffer.push(elementStrings.substr(cursor));
					cursor=elementStringsLength;
				}

			}

			} while (cursor < elementStringsLength);


			// process the buffer;

			var obj={};

			for (var i=0; i<buffer.length; i++) {
				var el = buffer[i];
				var matched=false;
				var aiCandidate=el.substr(0,2);
				if (this.twoDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(2);
					matched=true;
				}
				var aiCandidate=el.substr(0,3);
				if (this.threeDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(3);
					matched=true;
				}
				var aiCandidate=el.substr(0,4);
				if (this.fourDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(4);
					matched=true;
				}
				if (!matched) {
					throw new Error("No matching GS1 AI found for "+el);
				}	
			}

			return obj;
		}
	}

	// this method converts an associative array of GS1 Application Identifiers and their values into a GS1 Digital Link URI
	// set useShortText = true if you wish to use alphabetic mnemonic short names, e.g. /gtin/ instead of /01/
	// set uriStem to a value e.g. 'https://example.org' if you wish to use a specific domain name
	// setting uriStem to null, undefined or "" defaults to 'https://id.gs1.org' as the reference domain
	buildGS1digitalLink(gs1AIarray,useShortText,uriStem) {

		var identifiers=[];
		var qualifiers=[];
		var attributes=[];
		var fixedLengthValues=[];
		var variableLengthValues=[];
	
		var valid=true;
		var path="";
		var queryStringArray=[];
		var queryString="";
		var webURI="";
		var canonicalStem="https://id.gs1.org";
		var rv={};

		// Need to remove unwanted trailing slash
		if ((uriStem !== undefined) && (uriStem !== null) && (uriStem !== "") && (uriStem.endsWith("/"))) {
			uriStem=uriStem.substr(0,uriStem.length-1)+path+queryString;				
		}


		for (var a in gs1AIarray) {
			if (this.aiMaps.identifiers.includes(a)) {
				identifiers.push(a);
			}
			if (this.aiMaps.qualifiers.includes(a)) {
				qualifiers.push(a);
			}
			if (this.aiMaps.dataAttributes.includes(a)) {
				attributes.push(a);
			}
			if (this.aiMaps.fixedLength.includes(a)) {
				fixedLengthValues.push(a);
			}
			if (this.aiMaps.variableLength.includes(a)) {
				variableLengthValues.push(a);
			}
		}

		// Start building Web URI path expression
		// need exactly one identifier key

		if (identifiers.length !== 1) {
			valid=false;
			throw new Error("The element string should contain exactly one primary identification key - it contained "+identifiers.length+" "+JSON.stringify(identifiers)+"; please check for a syntax error");
		} else {

			this.verifySyntax(identifiers[0],gs1AIarray[identifiers[0]]);

		
			this.verifyCheckDigit(identifiers[0],gs1AIarray[identifiers[0]]);

		

						if (useShortText) {
							// Using short text names
							if (this.aiShortCode[identifiers[0]] !== undefined) {
								path="/"+this.aiShortCode[identifiers[0]]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);			
							} else {
								path="/"+identifiers[0]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);
							}
						} else {
							// Using numeric AIs
							path="/"+identifiers[0]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);
						}

					// append any data qualifiers in the expected order, as specified in this.aiQualifiers[identifiers[0]]
	
					if (this.aiQualifiers[identifiers[0]] !== undefined) {
						for (var j in this.aiQualifiers[identifiers[0]]) {
							var q=this.aiQualifiers[identifiers[0]][j]
							if (qualifiers.includes(q)) {

						if (useShortText) {
							// Using short text names
							if (this.aiShortCode[q] !== undefined) {
								path+="/"+this.aiShortCode[q]+"/"+this.percentEncode(gs1AIarray[q]);			
							} else {
								path+="/"+q+"/"+this.percentEncode(gs1AIarray[q]);
							}
						} else {
							// Using numeric AIs
							path+="/"+q+"/"+this.percentEncode(gs1AIarray[q]);
						}

							}
						}
					}
	
					// if there are any data attributes, we need to add these to the query string
	
					if (attributes.length >0) {

						for (var k in attributes) {
							var a=attributes[k];
					
							if (useShortText) {
								// Using short text names
								if (this.aiShortCode[a] !== undefined) {
									queryStringArray.push(this.aiShortCode[a]+"="+this.percentEncode(gs1AIarray[a]));			
								} else {
									queryStringArray.push(a+"="+this.percentEncode(gs1AIarray[a]));
								}
							} else {
								// Using numeric AIs
								queryStringArray.push(a+"="+this.percentEncode(gs1AIarray[a]));
							}
					
					
					
						}
						queryString="?"+queryStringArray.join("&");
				
		
					}

				if ((uriStem == null) || (uriStem == "")) {
					// prepare a canonical Web URI
					webURI=canonicalStem+path+queryString;	
				} else {
					webURI=uriStem+path+queryString;
				}

	

		}
			

		return webURI;	
	}


	// this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
	// it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)
	extractFromGS1digitalLink(gs1DigitalLinkURI) {
		var obj={};
		var cursor=0;	
		var queryString="";
		var uriPathInfo="";
		var candidates={};
		
		// strip off https:// or http:// 
		if (gs1DigitalLinkURI.indexOf("http://") == 0) { cursor=7 }
		if (gs1DigitalLinkURI.indexOf("https://") == 0) { cursor=8 }

		var firstSlash = gs1DigitalLinkURI.substr(cursor).indexOf("/");
		var firstQuestionMark = gs1DigitalLinkURI.substr(cursor).indexOf("?");
		
		if (firstQuestionMark > -1) {
			queryString = gs1DigitalLinkURI.substr(cursor).substr(1+firstQuestionMark);
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substring(firstSlash,firstQuestionMark);
		} else {
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substr(firstSlash);
			var firstFragment = uriPathInfo.indexOf("#");
			if (firstFragment > -1) {
				uriPathInfo = uriPathInfo.substring(0,firstFragment);
			}
		}

		// process URI path information
		var pathElements = uriPathInfo.substr(1).split("/");
		var l = pathElements.length;
		var pathElementIndex=l-2;
		while (pathElementIndex >= 0) {
			candidates[pathElements[pathElementIndex]]=this.percentDecode(pathElements[1+pathElementIndex]);
			pathElementIndex-=2;
		}

		
		if (queryString !== "") {
			// if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
			queryString = queryString.replace(new RegExp(";", 'g'),"&");

			var firstFragment = queryString.indexOf("#");
			if (firstFragment > -1) {
				queryString = queryString.substring(0,firstFragment);
			}
			
			
			
			var pairs = queryString.split("&");
			for (var i=0; i<pairs.length; i++) {
				var p = pairs[i].split("=");
				if ((p[0] !== null) && (p[1] !== null)) {
					candidates[p[0]]=this.percentDecode(p[1]);
				}
			}
		}
		
		var allnumeric = new RegExp("^\\d+$");

		// process candidates;
		for (var k in candidates) {
			if (candidates.hasOwnProperty(k)) {
			   if (!(allnumeric.test(k))) {
					// for keys that are not all-numeric, attempt to convert to all-numeric AI equivalent
			   		if (this.shortCodeToNumeric.hasOwnProperty(k)) {
			   			var numkey = this.shortCodeToNumeric[k];
			   			candidates[numkey]=candidates[k];
			   			delete candidates[k];
			   		} else {
			   			// or otherwise remove from candidates map if it doesn't relate to a GS1 Application Identifier
			   			delete candidates[k];
			   		}
			   }
			}
	    }			
				
		for (var k in candidates) {
			if (candidates.hasOwnProperty(k)) {
					this.verifySyntax(k,candidates[k]);
					this.verifyCheckDigit(k,candidates[k]);
					obj[k] = padGTIN(k,candidates[k]);
			}
		}
							
		return obj;

		function padGTIN(ai,value) {
			var newvalue=value;
			// always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
			if ((ai == "01") || (ai == "(01)") || (ai == "02") || (ai == "(02)")) {
				if (value.length==8) { newvalue = '000000'+value; }
				if (value.length==12) { newvalue = '00'+value; }
				if (value.length==13) { newvalue = '0'+value; }
			}
			return newvalue;
		}


	}
	

	// this method converts an associative array of GS1 Application Identifiers and their values into concatenated GS1 element strings
	// set brackets=true if you want a human-readable concatenation with round brackets around GS1 Application Identifiers
	// set brackets=false if you don't; in this case the group separator will be used to mark the end of any field that is not defined length, except for the last element string in the concatenation
	buildGS1elementStrings(gs1AIarray,brackets) {
		// if brackets=true, use GS1 Digital Link ordering - identifier, qualifiers then data attributes in numeric order
		var identifiers=[];
		var qualifiers=[];
		var attributes=[];
		var fixedLengthValues=[];
		var variableLengthValues=[];
		var elementStrings=[];
	
		for (var a in gs1AIarray) {
			if (gs1AIarray.hasOwnProperty(a)) {
				if (this.aiMaps.identifiers.includes(a)) {
					identifiers.push(a);
				}
				if (this.aiMaps.qualifiers.includes(a)) {
					qualifiers.push(a);
				}
				if (this.aiMaps.dataAttributes.includes(a)) {
					attributes.push(a);
				}
				if (this.aiMaps.fixedLength.includes(a)) {
					fixedLengthValues.push(a);
				}
				if (this.aiMaps.variableLength.includes(a)) {
					variableLengthValues.push(a);
				}

			}
		}

	

		if (brackets==true) {



			if (identifiers.length !== 1) {
				throw new Error("The associative array should contain exactly one primary identification key - it contained "+identifiers.length+" "+JSON.stringify(identifiers)+"; please check for a syntax error");
			} else {

			this.verifySyntax(identifiers[0],gs1AIarray[identifiers[0]]);
			this.verifyCheckDigit(identifiers[0],gs1AIarray[identifiers[0]]);

			elementStrings = elementStringsPush(elementStrings,"("+identifiers[0]+")",gs1AIarray[identifiers[0]],"");

			// append any valid found qualifiers for that primary identifier to the elementStrings array
			
			if (this.aiQualifiers.hasOwnProperty(identifiers[0])) {
				var qualifiersForPrimary=this.aiQualifiers[identifiers[0]];
				
				for (var qindex in qualifiersForPrimary) {
					if (qualifiers.indexOf(qualifiersForPrimary[qindex]) > -1) {
						elementStrings = elementStringsPush(elementStrings,"("+qualifiersForPrimary[qindex]+")",gs1AIarray[qualifiersForPrimary[qindex]],"");

					}
				}
			}

			// append any found attributes to the elementStrings array
			var sortedAttributes = attributes.sort();
			for (var a in sortedAttributes) {
				elementStrings = elementStringsPush(elementStrings, "("+attributes[a]+")",gs1AIarray[attributes[a]],"");
			}
			

		



			}

		
			
		} else {
		// if brackets=false, concatenate defined-length AIs first, then variable-length AIs
		// identify which AIs in gs1AIarray are defined fixed length

			var fixedLengthPrimaryIdentifier=[];
			var fixedLengthValuesOther=fixedLengthValues.slice(0);;
			
			
			for (var i in fixedLengthValuesOther) {
				if (identifiers.indexOf(fixedLengthValuesOther[i]) > -1) {
					fixedLengthPrimaryIdentifier.push(fixedLengthValuesOther[i]);
					fixedLengthValuesOther.splice(i,1);
				}
			}

			for (var i in fixedLengthPrimaryIdentifier) {
				elementStrings = elementStringsPush(elementStrings,fixedLengthPrimaryIdentifier[i],gs1AIarray[fixedLengthPrimaryIdentifier[i]],"");

			}			

			for (var i in fixedLengthValuesOther) {
				elementStrings = elementStringsPush(elementStrings,fixedLengthValuesOther[i],gs1AIarray[fixedLengthValuesOther[i]],"");
			}			

			for (var i in variableLengthValues) {
				var gs="";
				if (i<(variableLengthValues.length-1)) {
					gs=this.groupSeparator;
				}
				elementStrings = elementStringsPush(elementStrings,variableLengthValues[i],gs1AIarray[variableLengthValues[i]],gs);
			}			
					
		}
		
		return elementStrings.join("");
		
		
		function elementStringsPush(elementStrings,ai,value,gs) {
			var newvalue=value;
			// always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
			if ((ai == "01") || (ai == "(01)") || (ai == "02") || (ai == "(02)")) {
				if (value.length==8) { newvalue = '000000'+value; }
				if (value.length==12) { newvalue = '00'+value; }
				if (value.length==13) { newvalue = '0'+value; }
			}
			elementStrings.push(ai+newvalue+gs);
			return elementStrings;
		}
		
	}
		

	// translate a string of concatenated GS1 element strings into a GS1 Digital Link URI
	gs1ElementStringsToGS1DigitalLink(elementString,useShortText,uriStem) {
		return this.buildGS1digitalLink(this.extractFromGS1elementStrings(elementString),useShortText,uriStem);
	}

	// translate a GS1 Digital Link URI into a string of concatenated GS1 element strings	
	gs1digitalLinkToGS1elementStrings(digitalLinkURI,brackets) {
		return this.buildGS1elementStrings(this.extractFromGS1digitalLink(digitalLinkURI),brackets);
	}


}
