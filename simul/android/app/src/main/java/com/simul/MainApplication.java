package com.simul;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.airbnb.android.react.maps.MapsPackage;
=======
import com.imagepicker.ImagePickerPackage;
>>>>>>> cf49ec8dcce07a6b3a70384e781772ea0bacf883
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new MapsPackage(),
=======
            new ImagePickerPackage(),
>>>>>>> cf49ec8dcce07a6b3a70384e781772ea0bacf883
            new ReactNativeI18n()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
