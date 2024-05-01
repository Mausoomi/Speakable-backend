var express = require("express");
var router = express.Router();
const multer = require("multer");
const isAuthorizedUser = require("../middleware/auth");

const {
  index,
  Signup_Student,
  Signin_Student,
  Signin_Teacher,
  Create_Enquiry_Student,
  Fetch_Enquiry_Student,
  Delete_Enquiry_Student,
  Update_Enquiry_Student,
  Signin_admin,
  Signup_admin,
  Signin_user,
  FetchAll_Students,
  currentAdmin,
  signout,
  Fetch5Teachers,
  TeacherDetails,
  Fetch5courses,
  Create_Course,
  Fetch1teacher,
  courseDetails,
  Delete_Student,
  Update_Student,
  Delete_Teacher,
  Update_Teacher,
  Delete_Course,
  Update_Course,
  getstudentbyID,
  getteachers,
  getenquiries,
  getcourses,
  imageupload,
  Create_Booking,
  Delete_Booking,
  Update_Booking,
  getbookings,
  StudentDetails,
  Signup_accountant,
  Delete_Payment,
  Add_Package,
  Delete_Package,
  Update_Package,
  getpackages,
  getpayments,
  Create_Enquiry,
  Fetch_Single_Package,
  GetBookingsByStudentID,
  GetBookingsByTeacherID,
  GetCourseByID,
  GetPackageByTeacherID,
  GetPaymentsByStudentID,
  Signup_Student_By_Admin,
  Signup_Teacher_By_Admin,
  Get_Notifications_by_id,
  DeleteNotification_by_id,
  NotificationsOfAdmin,
  NotificationsOfAccountant,
  Make_Payment,
  FindUserByEmail,
  MatchOTP,
  Reset_Password,
  authorizePayment,
  Search_Free_Package,
  Signup_Student_With_Booking,
  GetExistingTeacherAvailability,
  GetExistingTeacherAvailability__oF_Package,
  Create_Owncloud_Account,
  GetExistingTeacher_Availability,
  Create_CustomPackage,
  SearchTeacherbyUsername,
  SearchStudentbyUsername,
  SearchCoursebyName,
  SearchBookingbyStudentUsername,
  SearchEnquirybyStudentUsername,
  SearchPaymentbyStudentUsername,
  SearchPackagebyPackageName,
} = require("../controllers/indexContoller");

// ---------------- Multer Routes For Uploading Images ---------------------------------------------------

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ------------------------------------------------------------------------- Routes ----------------------

router.get("/", index );

//@api- post/me -- For load user
router.post("/api/me", isAuthorizedUser, currentAdmin );

router.get("/api/signout", signout );

router.post("/api/FindUserByEmail", FindUserByEmail );

router.post("/api/MatchOTP", MatchOTP );

router.post("/api/Reset_Password", Reset_Password );

// ------------------------------------------------------------------------- Accountant Routes -----------

router.post("/api/Signup_accountant", Signup_accountant );

// ------------------------------------------------------------------------- User Routes -----------------

router.post("/api/Signin_user", Signin_user );

// -------------------------------------------------------------------------  Admin Routes ---------------

router.post("/api/Signup_admin", Signup_admin );

router.post("/api/Signin_admin", Signin_admin );

// --------------------------------------------------------------------------  Student Routes ------------

router.post("/api/Signup_Student", Signup_Student );

router.post("/api/Signup_Student_By_Admin", Signup_Student_By_Admin );

router.post("/api/Signin_Student", Signin_Student );

router.get("/api/Delete_student/:student_ID", Delete_Student );

router.get("/api/FetchAll_students", FetchAll_Students );

router.post("/api/Update_Student/:StudentID", Update_Student );

router.get("/api/fetchStudentDetails/:StudentID", StudentDetails );

// -------------------------------------------------------------------------- Teachers Routes ------------

router.post("/api/Signup_Teacher_By_Admin", Signup_Teacher_By_Admin );

router.post("/api/Signin_Teacher", Signin_Teacher );

router.get("/api/Delete_teacher/:teacher_ID", Delete_Teacher );

router.post("/api/Update_Teacher/:TeacherID", Update_Teacher );

router.get("/api/getteachers", getteachers );

// -------------------------------------------------------------------------- Enquiry Routes --------------

router.get("/api/Fetch_Enquiry_Student/:Email", Fetch_Enquiry_Student );

router.post("/api/Create_Enquiry_Student/:StudentID", Create_Enquiry_Student );

router.get("/api/Delete_Enquiry_Student/:EnquiryID", Delete_Enquiry_Student );

router.post("/api/Update_Enquiry_Student/:StudentID/:EnquiryID", Update_Enquiry_Student );

router.get("/api/getenquiries", getenquiries );

router.post("/api/Create_Enquiry", Create_Enquiry );

// -------------------------------------------------------------------------  Fetch Routes  -------------------

router.get("/api/Fetch5Teachers", Fetch5Teachers );

router.get("/api/Fetch1teacher", Fetch1teacher );

router.get("/api/fetchTeacherDetails/:TeacherID", TeacherDetails );

router.get("/api/fetchcourseDetails/:CourseID", courseDetails );

// ------------------------------------------------------------------------  Courses Routes  ---------------------

router.get("/api/Fetch5courses", Fetch5courses );

router.post("/api/Create_Course", Create_Course );

router.get("/api/Delete_course/:CourseID", Delete_Course );

router.post("/api/Update_Course/:CourseID", Update_Course );

router.get("/api/getcourses", getcourses );

// -------------------------------------------------------------------------  Booking Routes  -------------------------

router.post("/api/Create_Booking", Create_Booking );

router.get("/api/Delete_Booking/:BookingID", Delete_Booking );

router.post("/api/Update_Booking/:BookingID", Update_Booking );

router.get("/api/getbookings", getbookings );

// -------------------------------------------------------------------------  Payment Routes  -------------------------

router.get("/api/Delete_Payment/:PaymentID", Delete_Payment );

router.get("/api/getpayments", getpayments );

// -------------------------------------------------------------------------  Package Routes  -------------------------

router.post("/api/Add_Package", Add_Package );

router.get("/api/Delete_Package/:PackageID", Delete_Package );

router.post("/api/Update_Package/:PackageID", Update_Package );

router.get("/api/getpackages", getpackages );

router.get("/api/fetchPackage/:PackageID", Fetch_Single_Package );

router.get("/api/Search_Free_Package", Search_Free_Package );

// -------------------------------------------------------------------------  Get Routes  -------------------------

router.get("/api/getstudentbyID/:StudentID", getstudentbyID );

router.get("/api/GetBookingsByStudentID/:StudentID", GetBookingsByStudentID );

router.get("/api/GetBookingsByTeacherID/:TeacherID", GetBookingsByTeacherID );

router.get("/api/GetCourseByID/:CourseID", GetCourseByID );

router.get("/api/GetPackageByTeacherID/:TeacherID", GetPackageByTeacherID );

router.get("/api/GetPaymentsByStudentID/:StudentID", GetPaymentsByStudentID );

// ---------------------------------------------------------------------------- Image Route ---------------------------------------

router.post("/api/update-image", upload.single("image"), imageupload );

//  --------------------------------------------------------------------------- Notifications Routes ----------------------------

router.get("/api/Get_Notifications/:id", Get_Notifications_by_id );

router.get("/api/DeleteNotification/:id", DeleteNotification_by_id );

router.get("/api/NotificationsOfAdmin", NotificationsOfAdmin );

router.get("/api/NotificationsOfAccountant", NotificationsOfAccountant );

// ------------------------------------------------------------------------------- Payments Routes -----------------------------

router.post("/api/Make-Payment", Make_Payment );

router.get("/api/authorizePayment/:orderId", authorizePayment );

router.get("/api/GetExistingTeacherAvailability/:BookingID", GetExistingTeacherAvailability );

router.get("/api/GetExistingTeacherAvailability__oF_Package/:Package_ID", GetExistingTeacherAvailability__oF_Package );

router.post("/api/Signup_Student_With_Booking", Signup_Student_With_Booking );

router.post("/api/Create_Owncloud_Account", Create_Owncloud_Account );

// ----------------------------------------------------------------------------------

router.get("/api/GetExistingTeacher_Availability/:TeacherID", GetExistingTeacher_Availability );

router.post("/api/Create_CutsomPackage", Create_CustomPackage );

router.post('/api/SearchTeacherbyUsername/:Search_input' ,  SearchTeacherbyUsername)

router.post('/api/SearchStudentbyUsername/:Search_input', SearchStudentbyUsername)

router.post('/api/SearchCoursebyName/:Search_input', SearchCoursebyName )

// SearchBookingbyStudentUsername
router.post('/api/SearchBookingbyStudentUsername/:Search_input', SearchBookingbyStudentUsername )
// SearchEnquirybyStudentUsername
router.post('/api/SearchEnquirybyStudentUsername/:Search_input' , SearchEnquirybyStudentUsername)
// SearchPaymentbyStudentUsername
router.post('/api/SearchPaymentbyStudentUsername/:Search_input' , SearchPaymentbyStudentUsername )

router.post('/api/SearchPackagebyPackageName/:Search_input' ,SearchPackagebyPackageName )

module.exports = router;
