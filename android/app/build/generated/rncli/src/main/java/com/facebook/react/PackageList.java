
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

import com.agpivot.BuildConfig;
import com.agpivot.R;

// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-orientation
import com.github.yamill.orientation.OrientationPackage;
// react-native-spinkit
import com.react.rnspinkit.RNSpinkitPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  public PackageList(ReactNativeHost reactNativeHost) {
    this.reactNativeHost = reactNativeHost;
  }

  public PackageList(Application application) {
    this.reactNativeHost = null;
    this.application = application;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new RNGestureHandlerPackage(),
      new LinearGradientPackage(),
      new OrientationPackage(),
      new RNSpinkitPackage(),
      new VectorIconsPackage()
    ));
  }
}