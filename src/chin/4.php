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

$inputFileName = './user.xlsx';
$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
$highestRow = $spreadsheet->getActiveSheet()->getHighestRow();

require_once('./db.inc.php');

for($i = 1; $i <= $highestRow; $i++) {
    //若是某欄位值為空，代表那一列可能都沒資料，便跳出迴圈
    if( $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === '' || $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue() === null ) break;
    
    $productId =                       $spreadsheet->getActiveSheet()->getCell('A'.$i)-> getCalculatedValue();
    $userId  =                       $spreadsheet->getActiveSheet()->getCell('B'.$i)-> getCalculatedValue();
    $userName  =                   $spreadsheet->getActiveSheet()->getCell('C'.$i)-> getCalculatedValue();
    $rank  =                   $spreadsheet->getActiveSheet()->getCell('D'.$i)-> getCalculatedValue();
    $commentText  =       $spreadsheet->getActiveSheet()->getCell('E'.$i)-> getCalculatedValue();
    $commentText2  =                      $spreadsheet->getActiveSheet()->getCell('F'.$i)-> getCalculatedValue();
    $img  =               $spreadsheet->getActiveSheet()->getCell('G'.$i)-> getCalculatedValue();
    // $courseId =                         $spreadsheet->getActiveSheet()->getCell('H'.$i)->getValue();
    // $courseCredit =                     $spreadsheet->getActiveSheet()->getCell('H'.$i)->getValue();
    // $courseClassTime =                  $spreadsheet->getActiveSheet()->getCell('I'.$i)->getValue();
    // $courseCollaborator =               $spreadsheet->getActiveSheet()->getCell('J'.$i)->getValue();
    // $courseCollaboratorCategory =       $spreadsheet->getActiveSheet()->getCell('K'.$i)->getValue();
    // $courseCollaboratorIntroduction =   $spreadsheet->getActiveSheet()->getCell('L'.$i)->getValue();
    // $courseResult =                     $spreadsheet->getActiveSheet()->getCell('M'.$i)->getValue();
    // $courseSDGs =                       $spreadsheet->getActiveSheet()->getCell('N'.$i)->getValue();
    
    // echo "[".$i."] ".$courseTerm." ".$courseName."\n";
    
    $sql = "insert into `user_comment` (
        `productId`, `userId`,`userName`, `rank`, `commentText`, `commentText2`, 
        `img`) values (
            ?,?,?,?,?,
            ?,?
        )";
    $stmt = $pdo->prepare($sql);
    $arrParam = [
        (string)$productId,
        (string)$userId,
        (string)$userName,
        (string)$rank,
        (string)$commentText,
        (string)$commentText2,
        (string)$img,
    ];
    $stmt->execute($arrParam);
    if( $stmt->rowCount() > 0 ){
        echo $pdo->lastInsertId();
    }
}
?>