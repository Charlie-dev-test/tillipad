<?php if($this->beginCache($id, ['duration' => 60])): ?>
    <h3><?=$country->country_name?></h3>
    <ul>
        <?php foreach ($city as $city): ?>
            <li>
                <?= $city->city_name ?>
            </li>
        <?php endforeach; ?>
    </ul>
<?php $this->endCache(); endif; ?>