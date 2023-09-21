import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:portfolio/model/models.dart';
import 'package:portfolio/resource/styles.dart';

enum ScreenType { mobile, tab, web }

class AppClass {
  static final AppClass _mAppClass = AppClass._internal();
  static BuildContext? lastContext;
  ScrollController controller = ScrollController();

  List<WorkModel> projectList = [
    WorkModel(
      projectTitle: "AstroTarot",
      projectContent:
          "AstroTarot is a mobile application that provides the user with a daily horoscope and tarot card reading. It is developed with user-centric features to help the users with integrated InApp payment mode with high level security.",
      tech1: "Flutter",
      tech2: "Firebase",
    ),
    WorkModel(
      projectTitle: "Spotify Clone (Swift)",
      projectContent:
          "Built a Spotify clone using Swift and Spotify API. The app has a login page, a home page, a search page, and a playlist page.",
      tech1: "Swift",
      tech2: "Spotify API",
    ),
    WorkModel(
      projectTitle: "UluApp",
      projectContent: '''An application for the Uludag University students.''',
      tech1: "Flutter",
      tech2: "TypeScript",
      tech3: "Firebase",
    ),
    WorkModel(
      projectTitle: "CineCasti",
      projectContent:
          '''CineCasti is a movie recommendation app that uses the Movie Database API to fetch movies and their details. It also uses the Firebase API to store user data and authenticate users.''',
      tech1: "Flutter",
      tech2: "Rest API",
      tech3: "Firebase",
    ),
    WorkModel(
        projectTitle: "Chrome Extension",
        projectContent:
            '''A chrome extension that helps the user to get the information about crypto currency. It also helps the user to get the information about the crypto currency price in different currencies.''',
        tech1: "Flutter",
        tech2: "NodeJs",
        tech3: "Flutter"),
    WorkModel(
      projectTitle: "Robot Arm",
      projectContent:
          '''A robot arm that can be controlled by a mobile application.''',
      tech1: "Arduino",
    ),
  ];

  factory AppClass() {
    return _mAppClass;
  }

  AppClass._internal();

  getMqWidth(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }

  getMqHeight(BuildContext context) {
    return MediaQuery.of(context).size.height;
  }

  showSnackBar(String msg, {BuildContext? context}) {
    ScaffoldMessenger.of(context ?? lastContext!)
        .showSnackBar(SnackBar(content: Text(msg)));
  }

  ScreenType getScreenType(BuildContext context) {
    double scrWidth = getMqWidth(context);
    if (scrWidth > 915) {
      return ScreenType.web;
    } else if (scrWidth < 650) {
      return ScreenType.mobile;
    }
    return ScreenType.tab;
  }

  alertDialog(context, title, msg) {
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(title, style: TxtStyle().boldWhite(context)),
        content: Text(msg),
        actions: [
          ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
              onPressed: () => Navigator.pop(context),
              child: Text('Okay'))
        ],
      ),
    );
  }

  Future<bool> sendEmail(name, contact, msg) async {
    var url = Uri.https('hbk-portfolio-mailer.web.app', '/sendMail');
    var response = await post(url,
            body: {"name": name, "contactInfo": contact, "message": msg})
        .timeout(Duration(seconds: 10));
    print(response.body);
    return response.statusCode == 200;
  }
}
