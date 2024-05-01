const notifications = require('../models/notifications');

const createNotification = async (notificationbody, userType,userid) => {
    try {
        const notification = await new notifications({
            Notification_body: notificationbody,
            UserType: userType,
            userid:userid
        });
        await notification.save();
    } catch (error) {
        console.error(error);
    }
};

const NotificationHandler_Student = async (notificationbody,userid) => {
    await createNotification(notificationbody, 'student',userid);
};

const NotificationHandler_Admin = async (notificationbody,userid) => {
    await createNotification(notificationbody, 'admin',userid);
};

const NotificationHandler_Teacher = async (notificationbody,userid) => {
    await createNotification(notificationbody, 'teacher',userid);
};

const NotificationHandler_Accountant = async (notificationbody,userid) => {
    await createNotification(notificationbody, 'accountant',userid);
};

module.exports = {
    NotificationHandler_Student,
    NotificationHandler_Admin,
    NotificationHandler_Teacher,
    NotificationHandler_Accountant,
};
