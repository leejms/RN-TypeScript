package com.rnproject;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.List;

/**
 * Created by josephjohnson on 5/24/17.
 */

public class MainHost extends ReactNativeHost {

    protected MainHost(Application application) {
        super(application);
    }

    @Override
    protected String getJSMainModuleName() {
        return "artifacts/index";
    }

    @Override
    public boolean getUseDeveloperSupport() {
        return true;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return null;
    }
}
