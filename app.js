let members =[
    { memberCode: "GYM-001", fullName: "Hoang Van Nam",
    packageName: "Gói Cơ Bản",
    age: 22, monthCount: 3 },
    { memberCode: "GYM-002", fullName: "Lý Thị Mai",
    packageName: "Gói Yoga",
    age: 30, monthCount: 6 },
    { memberCode: "GYM-003", fullName: "Bui Đức Anh",
    packageName: "Goi Thể Hình Nang Cao",
    age: 27, monthCount: 12 }
];


function validateMemberCode(code) {
    if (code.length < 6) {
        return "Độ dài nhỏ hơn 6 ký tự"
    }
    if (!code.startsWith("GYM-")) {
        return "Sai tiền tố GYM-";
    }
    if (code.includes(" ")) {
        return "Chứa khoảng trắng";
    }
    if (findMemberIndex(code) !== -1) {
        return "Mã hội viên đã tồn tại"
    }
    if (code === "") {
        return "Chưa nhập mã hội viên"
    }
    if (code === null)
        return "Hủy thao tác"
};


function findMemberIndex(code) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].memberCode === code) {
            return i;
        }
    }
    return -1;
};


function normalizeText(rawText) {
    while (true) {
        let name = prompt(rawText);
        if (name === null) {
            return null;
        }

        name = name.trim()
        if (name.includes("  ")) {
            name.replace("  ", " ");
        }

        if (name !== "") {
            return name;
        } 

        console.log("Không được để trống");
    }
};


function inputIntergerInRange(message) {
    let input = prompt(message);

    if (input === null) {
        return null;
    }

    input = input.trim();
    let age = Number(input);

    if (input !== "" && !isNaN(age) && age > 0) {
        return age;
    }
    console.log("Vui lòng nhập số nguyên lớn hơn 0")
}


function displayMembers(list) {
    if (list.length === 0) {
        console.log("Danh sách hội viên trống");
        return;
    }

    for (let i = 0; i < list.length; i++) {
        let member = list[i]

        console.log((i+1) + ". " + member.memberCode + "-" + member.fullName + "-" + member.packageName);
        console.log("Tuổi: " + member.age + " | Số tháng đăng ký: " + member.monthCount); 

       console.log("Tổng: " + members.length + " hội viên")
    }
};


function showMembers() {
    displayMembers(members);
}


function addMember() {
    let code = prompt("Nhập mã hội viên:");

    if (code === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    code = code.trim().toUpperCase();

    let error = validateMemberCode(code);

    if (error !== "") {
        console.log("Lỗi: " + error);
        return;
    }

    let fullName = normalizeText("Nhập tên hội viên:");

    if (fullName === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    let packageName = normalizeText("Nhập tên gói:");

    if (packageName === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    let age = inputIntergerInRange("Nhập số tuổi:");

    if (age <=16 || age >=70) {
        console.log("Số tuổi không hợp lệ");
        return;
    }

    if (age === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    let monthCount = inputIntergerInRange("Nhập số tháng tập:");

    if (monthCount <= 1 || monthCount >= 24) {
        console.log("Số tháng không hợp lệ");
        return;
    }

    if (monthCount === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    let member= {
        memberCode: code,
        fullName: fullName,
        packageName: packageName,
        age: age,
        monthCount: monthCount
    };

    members.push(member);

    console.log("Thêm hội viên thành công");
    console.log("Mã hội viên: " + code);
    console.log("Khách hàng: " + fullName);
    console.log("Tên gói: " + packageName);
    console.log("Tuổi: " + age);
    console.log("Số tháng: " + monthCount);
};


function updateMember() {
    let code = prompt("Nhập mã hội viên cần cập nhật:");

    if (code === null) {
        console.log("Đã hủy cập nhật");
        return;
    }

    code = code.trim().toUpperCase();

    let index = findMemberIndex(code);

    if (index === -1) {
        console.log("Không tìm thấy hội viên có mã " + code);
        return;
    }

    let monthCount = inputIntergerInRange("Nhập số tháng tập:");

    if (monthCount <= 1 || monthCount >= 24) {
        console.log("Số tháng không hợp lệ");
        return;
    }

    if (monthCount === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    let age = inputIntergerInRange("Nhập số tuổi:");

    if (age <=16 || age >=70) {
        console.log("Số tuổi không hợp lệ");
        return;
    }

    if (age === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }


    members[index].monthCount = monthCount;
    members[index].age = age;

    console.log("Cập nhật thành công");
};

function main() {
    let choice;

    do {
        console.log("===========================================");
        console.log("HỆ THỐNG QUẢN LÝ HỘI VIÊN PHÒNG TẬP FITZONE");
        console.log("===========================================");
        console.log("1. Hiển thị danh sách hội viên");
        console.log("2. Thêm hội viên mới");
        console.log("3. Cập nhật thông tin hội viên");
        console.log("4. Xóa hội viên");
        console.log("5. Tìm kiếm hội viên theo gói tập");
        console.log("0. Thoát chương trình");
        console.log("===========================================");

        choice = prompt("Nhập lựa chọn (0-5): ")

        if (choice === null) {
            console.log("Lựa chọn không hợp lệ");
            continue;
        }

        choice = choice.trim();

        switch (choice) {
            case "1":
                showMembers(displayMembers);
                break;
            case "2":
                addMember();
                break;
            case "3":
                updateMember();
                break;
            case "4":
                break;
            case "5":
                break;
            case "0":
                console.log("Cảm ơn đã sử dụng chương trình");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
            return;
        }
    } while (choice !== "0");
};

main();

































































