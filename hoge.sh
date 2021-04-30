change_log=$(cat CHANGELOG.md)
change_log="${change_log//$'\n'/  }"
echo $change_log
echo "::set-output name=std_out::$change_log"