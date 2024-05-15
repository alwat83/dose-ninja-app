import React, { useState, useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

const MedicationReminder = () => {
  const [medications, setMedications] = useState([]);
  const [reminderTime, setReminderTime] = useState(null);

  useEffect(() => {
    // Retrieve medications from Firestore
    const medicationsRef = firebase.firestore().collection('medications');
    medicationsRef.get().then((querySnapshot) => {
      const medications = querySnapshot.docs.map((doc) => doc.data());
      setMedications(medications);
    });

    // Set reminder time to 8am every day
    const reminderTime = new Date();
    reminderTime.setHours(8);
    reminderTime.setMinutes(0);
    setReminderTime(reminderTime);
  }, []);

  useEffect(() => {
    // Create a notification channel
    PushNotification.createChannel({
      channelId: 'medication-reminders',
      channelName: 'Medication Reminders',
    });

    // Schedule a notification for each medication
    medications.forEach((medication) => {
      const notificationTime = new Date(reminderTime);
      notificationTime.setHours(medication.time.hour);
      notificationTime.setMinutes(medication.time.minute);

      PushNotification.localNotificationSchedule({
        title: `Take your ${medication.name}!`,
        message: `Don't forget to take your ${medication.name} at ${medication.time.hour}:${medication.time.minute}!`,
        date: notificationTime,
        channelId: 'medication-reminders',
      });
    });
  }, [medications, reminderTime]);

  return null;
};

export default MedicationReminder;
