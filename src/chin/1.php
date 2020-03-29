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

$inputFileName = './items.xlsx';
$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
$highestRow = $spreadsheet->getActiveSheet()->getHighestRow();

require_once('./db.inc.php');

for($i = 1; $i <= $highestRow; $i++) {
    //若是某欄位值為空，代表那一列可能都沒資料，便跳出迴圈
    if( $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === '' || $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === null ) break;
    
    $name =                       $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue();
    $itemName  =                       $spreadsheet->getActiveSheet()->getCell('B'.$i)-> getCalculatedValue();
    $itemImg  =                   $spreadsheet->getActiveSheet()->getCell('C'.$i)-> getCalculatedValue();
    $itemDescription  =                   $spreadsheet->getActiveSheet()->getCell('D'.$i)-> getCalculatedValue();
    $itemPrice  =       $spreadsheet->getActiveSheet()->getCell('E'.$i)-> getCalculatedValue();
    $itemQty  =                      $spreadsheet->getActiveSheet()->getCell('F'.$i)-> getCalculatedValue();
    $itemCategoryId  =               $spreadsheet->getActiveSheet()->getCell('G'.$i)-> getCalculatedValue();
    // $courseId =                         $spreadsheet->getActiveSheet()->getCell('G'.$i)->getValue();
    // $courseCredit =                     $spreadsheet->getActiveSheet()->getCell('H'.$i)->getValue();
    // $courseClassTime =                  $spreadsheet->getActiveSheet()->getCell('I'.$i)->getValue();
    // $courseCollaborator =               $spreadsheet->getActiveSheet()->getCell('J'.$i)->getValue();
    // $courseCollaboratorCategory =       $spreadsheet->getActiveSheet()->getCell('K'.$i)->getValue();
    // $courseCollaboratorIntroduction =   $spreadsheet->getActiveSheet()->getCell('L'.$i)->getValue();
    // $courseResult =                     $spreadsheet->getActiveSheet()->getCell('M'.$i)->getValue();
    // $courseSDGs =                       $spreadsheet->getActiveSheet()->getCell('N'.$i)->getValue();
    
    // echo "[".$i."] ".$courseTerm." ".$courseName."\n";
    
    $sql = "insert into `items` (
        `name`, `itemName`,`itemImg`, `itemDescription`, `itemPrice`, `itemQty`, 
        `itemCategoryId`) values (
            ?,?,?,?,?,
            ?,?
        )";
    $stmt = $pdo->prepare($sql);
    $arrParam = [
        (string)$name,
        (string)$itemName,
        (string)$itemImg,
        (string)$itemDescription,
        (string)$itemPrice,
        (string)$itemQty,
        (string)$itemCategoryId,
    ];
    $stmt->execute($arrParam);
    if( $stmt->rowCount() > 0 ){
        echo $pdo->lastInsertId();
    }
}
?>