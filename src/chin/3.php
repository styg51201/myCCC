<?php
require_once('vendor/autoload.php');

// use PhpOffice\PhpSpreadsheet\Spreadsheet;
// use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
// $spreadsheet = new Spreadsheet();
// $sheet = $spreadsheet->getActiveSheet();
// $sheet->setCellValue('A1', 'Hello World !');
// $writer = new Xlsx($spreadsheet);
// $writer->save('hello world.xlsx');
// $cellValue = $spreadsheet->getActiveSheet()->getCell('A1')->getValue();
// echo $cellValue;

$inputFileName = './pk.xlsx';
$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
$highestRow = $spreadsheet->getActiveSheet()->getHighestRow();

require_once('./db.inc.php');

for($i = 1; $i <= $highestRow; $i++) {
    //若是某欄位值為空，代表那一列可能都沒資料，便跳出迴圈
    if( $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === '' || $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === null ) break;
    
    $name = $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue();
    $itemName = $spreadsheet->getActiveSheet()->getCell('B'.$i)-> getCalculatedValue();
    $itemImg = $spreadsheet->getActiveSheet()->getCell('C'.$i)-> getCalculatedValue();
    $itemDescription = $spreadsheet->getActiveSheet()->getCell('D'.$i)-> getCalculatedValue();
    $itemPrice= $spreadsheet->getActiveSheet()->getCell('E'.$i)-> getCalculatedValue();
    $itemQty= $spreadsheet->getActiveSheet()->getCell('F'.$i)-> getCalculatedValue();
    $itemCategoryId= $spreadsheet->getActiveSheet()->getCell('G'.$i)-> getCalculatedValue();
    $data = $spreadsheet->getActiveSheet()->getCell('H'.$i)-> getCalculatedValue();
    $data2 = $spreadsheet->getActiveSheet()->getCell('I'.$i)-> getCalculatedValue();
    $data3 = $spreadsheet->getActiveSheet()->getCell('J'.$i)-> getCalculatedValue();
    $data4 = $spreadsheet->getActiveSheet()->getCell('K'.$i)-> getCalculatedValue();
    $data5= $spreadsheet->getActiveSheet()->getCell('L'.$i)-> getCalculatedValue();
    $data6= $spreadsheet->getActiveSheet()->getCell('M'.$i)-> getCalculatedValue();
    $data7= $spreadsheet->getActiveSheet()->getCell('N'.$i)-> getCalculatedValue();
    $data8= $spreadsheet->getActiveSheet()->getCell('O'.$i)-> getCalculatedValue();
    $data9= $spreadsheet->getActiveSheet()->getCell('P'.$i)-> getCalculatedValue();
    $data10= $spreadsheet->getActiveSheet()->getCell('Q'.$i)-> getCalculatedValue();
    $data11= $spreadsheet->getActiveSheet()->getCell('R'.$i)-> getCalculatedValue();
    $data12= $spreadsheet->getActiveSheet()->getCell('S'.$i)-> getCalculatedValue();
    $data13= $spreadsheet->getActiveSheet()->getCell('T'.$i)-> getCalculatedValue();
    $data14= $spreadsheet->getActiveSheet()->getCell('U'.$i)-> getCalculatedValue();
    $data15= $spreadsheet->getActiveSheet()->getCell('V'.$i)-> getCalculatedValue();
    $data16= $spreadsheet->getActiveSheet()->getCell('W'.$i)-> getCalculatedValue();
    $data17= $spreadsheet->getActiveSheet()->getCell('X'.$i)-> getCalculatedValue();
    $data18= $spreadsheet->getActiveSheet()->getCell('Y'.$i)-> getCalculatedValue();
    $data19= $spreadsheet->getActiveSheet()->getCell('Z'.$i)-> getCalculatedValue();
    $data20= $spreadsheet->getActiveSheet()->getCell('AA'.$i)-> getCalculatedValue();
    $data21= $spreadsheet->getActiveSheet()->getCell('AB'.$i)-> getCalculatedValue();
    $data22= $spreadsheet->getActiveSheet()->getCell('AC'.$i)-> getCalculatedValue();
    $data23= $spreadsheet->getActiveSheet()->getCell('AD'.$i)-> getCalculatedValue();
    $data24= $spreadsheet->getActiveSheet()->getCell('AE'.$i)-> getCalculatedValue();
    $data25= $spreadsheet->getActiveSheet()->getCell('AF'.$i)-> getCalculatedValue();
    $data26= $spreadsheet->getActiveSheet()->getCell('AG'.$i)-> getCalculatedValue();
    $data27= $spreadsheet->getActiveSheet()->getCell('AH'.$i)-> getCalculatedValue();
    $data28= $spreadsheet->getActiveSheet()->getCell('AI'.$i)-> getCalculatedValue();
    $data29= $spreadsheet->getActiveSheet()->getCell('AJ'.$i)-> getCalculatedValue();
    $data30= $spreadsheet->getActiveSheet()->getCell('AK'.$i)-> getCalculatedValue();
    $data31= $spreadsheet->getActiveSheet()->getCell('AL'.$i)-> getCalculatedValue();
    $data32= $spreadsheet->getActiveSheet()->getCell('AM'.$i)-> getCalculatedValue();
    $data33= $spreadsheet->getActiveSheet()->getCell('AN'.$i)-> getCalculatedValue();
    $data34= $spreadsheet->getActiveSheet()->getCell('AO'.$i)-> getCalculatedValue();
    $data35= $spreadsheet->getActiveSheet()->getCell('AP'.$i)-> getCalculatedValue();
    $data36= $spreadsheet->getActiveSheet()->getCell('AQ'.$i)-> getCalculatedValue();
    $data37= $spreadsheet->getActiveSheet()->getCell('AR'.$i)-> getCalculatedValue();
    $data38= $spreadsheet->getActiveSheet()->getCell('AS'.$i)-> getCalculatedValue();
    $data39= $spreadsheet->getActiveSheet()->getCell('AT'.$i)-> getCalculatedValue();
    $data40= $spreadsheet->getActiveSheet()->getCell('AU'.$i)-> getCalculatedValue();
    $data41= $spreadsheet->getActiveSheet()->getCell('AV'.$i)-> getCalculatedValue();
    $data42= $spreadsheet->getActiveSheet()->getCell('AW'.$i)-> getCalculatedValue();
    $data43= $spreadsheet->getActiveSheet()->getCell('AX'.$i)-> getCalculatedValue();
    $data44= $spreadsheet->getActiveSheet()->getCell('AY'.$i)-> getCalculatedValue();
    $data45= $spreadsheet->getActiveSheet()->getCell('AZ'.$i)-> getCalculatedValue();
    $data46= $spreadsheet->getActiveSheet()->getCell('BA'.$i)-> getCalculatedValue();
    $data47= $spreadsheet->getActiveSheet()->getCell('BB'.$i)-> getCalculatedValue();
    $data48= $spreadsheet->getActiveSheet()->getCell('BC'.$i)-> getCalculatedValue();
    $data49= $spreadsheet->getActiveSheet()->getCell('BD'.$i)-> getCalculatedValue();
    $data50= $spreadsheet->getActiveSheet()->getCell('BE'.$i)-> getCalculatedValue();
    $data51= $spreadsheet->getActiveSheet()->getCell('BF'.$i)-> getCalculatedValue();
    $data52= $spreadsheet->getActiveSheet()->getCell('BG'.$i)-> getCalculatedValue();
    $data53= $spreadsheet->getActiveSheet()->getCell('BH'.$i)-> getCalculatedValue();
    $data54= $spreadsheet->getActiveSheet()->getCell('BI'.$i)-> getCalculatedValue();
    $data55= $spreadsheet->getActiveSheet()->getCell('BJ'.$i)-> getCalculatedValue();
    $data56= $spreadsheet->getActiveSheet()->getCell('BK'.$i)-> getCalculatedValue();
    
    // echo "[".$i."] ".$courseTerm." ".$courseName."\n";
    
    $sql = "insert into `items` (
        `name`, `itemName`,`itemImg`, `itemDescription`, `itemPrice`, `itemQty`, `itemCategoryId`,
        `data`,`data2`,`data3`,`data4`,`data5`,`data6`,`data7`,`data8`,`data9`,`data10`,
        `data11`,`data12`,`data13`,`data14`,`data15`,`data16`,`data17`,`data18`,`data19`,
        `data20`,`data21`,`data22`,`data23`,`data24`,`data25`,`data26`,`data27`,`data28`,
        `data29`,`data30`,`data31`,`data32`,`data33`,`data34`,`data35`,`data36`,`data37`,
        `data38`,`data39`,`data40`,`data41`,`data42`,`data43`,`data44`,`data45`,`data46`,
        `data47`,`data48`,`data49`,`data50`,`data51`,`data52`,`data53`,`data54`,`data55`,
        `data56`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $stmt = $pdo->prepare($sql);
    $arrParam = [
        (string)$name,
        (string)$itemName,
        (string)$itemImg,
        (string)$itemDescription,
        (string)$itemPrice,
        (string)$itemQty,
        (string)$itemCategoryId,
        (string)$data,
        (string)$data2,
        (string)$data3,
        (string)$data4,
        (string)$data5,
        (string)$data6,
        (string)$data7,
        (string)$data8,
        (string)$data9,
        (string)$data10,
        (string)$data11,
        (string)$data12,
        (string)$data13,
        (string)$data14,
        (string)$data15,
        (string)$data16,
        (string)$data17,
        (string)$data18,
        (string)$data19,
        (string)$data20,
        (string)$data21,
        (string)$data22,
        (string)$data23,
        (string)$data24,
        (string)$data25,
        (string)$data26,
        (string)$data27,
        (string)$data28,
        (string)$data29,
        (string)$data30,
        (string)$data31,
        (string)$data32,
        (string)$data33,
        (string)$data34,
        (string)$data35,
        (string)$data36,
        (string)$data37,
        (string)$data38,
        (string)$data39,
        (string)$data40,
        (string)$data41,
        (string)$data42,
        (string)$data43,
        (string)$data44,
        (string)$data45,
        (string)$data46,
        (string)$data47,
        (string)$data48,
        (string)$data49,
        (string)$data50,
        (string)$data51,
        (string)$data52,
        (string)$data53,
        (string)$data54,
        (string)$data55,
        (string)$data56,
    ];
    $stmt->execute($arrParam);
    if( $stmt->rowCount() > 0 ){
        echo $pdo->lastInsertId();
    }
}
?>