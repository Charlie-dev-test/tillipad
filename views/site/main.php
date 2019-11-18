<?php

/**
 * Вид главной страницы.
 * @var $this yii\web\View
 */

$this->title = 'Главная страница';
?>
<div class="country">
    <ul>
    <?php foreach ($countries as $country): ?>
        <li>
            <a href="#" data-id="<?=$country->id ?>" class="country_link"><?= $country->country_name ?></a>
        </li>
    <?php endforeach; ?>
    </ul>
</div>
<div class="city"></div>