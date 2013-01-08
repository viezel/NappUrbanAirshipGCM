# Napp Urban Airship Google Cloud Messaging Module

## Description

The NappUAGCM Module extends the Appcelerator Titanium Mobile framework with the PUSH messaging for Android.

The module is licensed under the MIT license.


## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:
    
    <modules>
        <module version="1.0" platform="android">dk.napp.uagcm</module> 
    </modules>


## Reference

### registerForPushNotifications()

* *productionAppKey* - Your Production App Key
* *productionAppSecret* - Your Production App Secret
* *developmentAppKey* - Your Development App Key
* *developmentAppSecret* - Your Development App Secret
* *transport* - gcm
* *inProduction* - Boolean - Are we using development or production keys and UA servers?
* *gcmSender* - Your Google API Project Number
* *pushServiceEnabled* - Boolean 
* *tags* - Array of strings for tagging
* *alias* - grouping multiple devices 

* *success* - Callback function for successful register of device 
* *error* - Callback function for error 
* *callback* - Callback function for receiving push messages 


### airshipconfig.properties

Please look at the example provided.


## Changelog

**v1.0**  
GCM with Urban Airship API v. 2.0.4 


## Author

**Mads Møller**  
web: http://www.napp.dk  
email: mm@napp.dk  
twitter: @nappdev  

## License

    Copyright (c) 2010-2013 Mads Møller

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.